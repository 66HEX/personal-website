import { works } from "@/app/data/worksData";

export async function generateStaticParams() {
    return works.map((work) => ({ id: work.id }));
}