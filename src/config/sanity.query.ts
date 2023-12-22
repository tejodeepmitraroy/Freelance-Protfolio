import { groq } from "next-sanity";

export const getInfoQuery = groq`*[_type=="basicInfo"][0]`;
