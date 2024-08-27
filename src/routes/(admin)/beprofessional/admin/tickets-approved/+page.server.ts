import { client } from "$lib/prisma/connection";
import { redirect, type Actions } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({url, depends}) => {

    depends("database");
    let pageNumber = Number(url.searchParams.get('page')) || 1;

    let limit = Number(url.searchParams.get('limit') || 10);

    if(limit < 0)
        limit = 10;

    const where = {
        verified: true,
    };
    
    const count = await client.tickets.count({
        where
    });

    if(pageNumber > Math.ceil(count/limit)) {
        pageNumber = Math.ceil(count/limit);   
    }

    if(pageNumber < 1)
        pageNumber = 1;

    let tickets = await client.tickets.findMany({

        take: limit,
        include: {
            viewer: true,
        },
        skip: (pageNumber-1) * limit,
        where
    })

    return {
        tickets,
        pageNumber,
        limit,
        count,
        filter: ""
    }
}

export const actions = {

    verify: async ({request, locals}) => {

        try {
            const data = await request.formData();
            const participation_id = Number(data.get('participationId'));

            if(!participation_id) {
                return {
                    success: false,
                }
            }

            const res = await client.event_participants.update({
                where: {
                    event_participant_id: participation_id,
                },
                data: {
                    verified: true
                }
            })

            return {
                success: true,
            }

        } catch (error) {
            console.log(error)

            return {
                success: false,
            }
        }
    },

    logout: async({cookies}) => {

        cookies.delete('admin', {
            path: '/',
            httpOnly: true,
            sameSite: 'strict',
            secure: false, //TODO : to be changed,
            maxAge: 60 * 60 * 24 * 3
        });

        throw redirect(302, "/");
    }
    
} satisfies Actions;