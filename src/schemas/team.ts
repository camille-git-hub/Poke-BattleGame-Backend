import z from 'zod';

const teamSchema = z.object({
    name: z.string().min(1, "Team name is required"),
    pokemons: z.array(z.string()).max(6, "A team can have a maximum of 6 Pokémon"),
});

export type Team = z.infer<typeof teamSchema>;

export default teamSchema;