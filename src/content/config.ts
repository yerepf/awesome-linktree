import { defineCollection, z } from "astro:content";

const links = defineCollection({
    schema: z.object({
        title: z.string(),
        url: z.string().url(),
        description: z.string().optional(),
        icon: z.string()
    })
})

const personal = defineCollection({
    schema: z.object({
        avatar: z.string().url(),
        name: z.string(),
        bio: z.string()
    })
})

export const collections = {links, personal};