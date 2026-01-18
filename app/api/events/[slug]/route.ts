import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Event from '@/database/event.model'
import { IEvent } from "@/database";


type RouteParams = {
    params: Promise<{
        slug: string
    }>
}


export async function GET(req: NextRequest, {params}: RouteParams ): Promise<NextResponse>{

    try {
        await connectDB();
        const {slug} = await params;

        if(!slug || typeof slug != 'string' || slug.trim() === '') {
            return NextResponse.json(
                {message: 'Invalid or missing slug parameter'},
                {status: 400}
            )
        }
         const sanitizedSlug = slug.trim().toLowerCase()

         const event: IEvent | null = await Event.findOne({slug: sanitizedSlug}).lean()

         if (!event) {
            return NextResponse.json(
                {message: 'Event not found'},
                {status: 400}
            )
         }

         return NextResponse.json(
            {message: 'Event fetched successfully', event},
            {status: 200}
         )
    } catch (error) {
        if(process.env.NODE_ENV === 'development'){
            console.error("Error fetching event by slug", error)
        }

        if (error instanceof Error) {
            if (error.message.includes('MONGOD_URI')) {
                return NextResponse.json(
                    {message: 'Database configuration error'},
                    {status: 500}
                )
            }

            return NextResponse.json(
                {message: 'Failed to fetch event', error: error.message},
                {status: 500}
            )
        }
    }

    return NextResponse.json(
        {message: 'Unexpected error occurred'},
        {status: 500}
    )
}