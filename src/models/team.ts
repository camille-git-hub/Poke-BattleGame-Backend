import { Schema, model, type InferSchemaType } from "mongoose";

const teamSchema = new Schema({
    name: { type: String, required: true },
    pokemons: {type: [Number], required: true, validate: [(val: number[]) => val.length <= 3, "A team can have a maximum of 3 Pokémon"]},
    userId: { type: String, required: true },
}, { timestamps: true });

export type Team = InferSchemaType<typeof teamSchema>;

export default model("Team", teamSchema);