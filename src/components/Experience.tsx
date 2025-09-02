// from https://github.com/tedawf/tedawf.com/blob/main/src/components/Experience.tsx

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/Tabs";
import careerData from "@/data/career.json";
import educationData from "@/data/education.json";
import { careerSchema, educationSchema } from "@/lib/schemas";
import Timeline from "./Timeline";

export default function Experience() {
    const career = careerSchema.parse(careerData).career;
    const education = educationSchema.parse(educationData).education;

    return (
        <Tabs defaultValue="work" className="w-full">
            <TabsList className="mb-2 grid w-full grid-cols-2">
                <TabsTrigger value="work">Work</TabsTrigger>
                <TabsTrigger value="education">Education</TabsTrigger>
            </TabsList>
            <TabsContent value="work">
                <Timeline experience={career}></Timeline>
            </TabsContent>
            <TabsContent value="education">
                <Timeline experience={education}></Timeline>
            </TabsContent>
        </Tabs>
    );
}