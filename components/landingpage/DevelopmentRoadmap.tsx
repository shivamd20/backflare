import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, GitMerge, Terminal, FolderSync, Users } from "lucide-react";

const roadmapItems = [
  { icon: <Check className="h-6 w-6 text-green-500" />, text: "Client-side encryption + restore" },
  { icon: <Check className="h-6 w-6 text-green-500" />, text: "Public dashboard" },
  { icon: <Terminal className="h-6 w-6 text-orange-500" />, text: "CLI / API" },
  { icon: <FolderSync className="h-6 w-6 text-orange-500" />, text: "Folder sync + snapshots" },
  { icon: <Users className="h-6 w-6 text-orange-500" />, text: "Community contributions" },
  { icon: <GitMerge className="h-6 w-6 text-orange-500" />, text: "Additional storage backends" },
];

export function DevelopmentRoadmap() {
  return (
    <section className="bg-gray-50 py-20 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Development Roadmap
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-400">
            We are just getting started. Here is a look at what is coming next.
          </p>
        </div>
        <div className="mt-16 max-w-2xl mx-auto">
          <Card>
            <CardContent className="pt-6">
              <ul className="space-y-4">
                {roadmapItems.map((item) => (
                  <li key={item.text} className="flex items-center">
                    {item.icon}
                    <span className="ml-4 text-lg text-gray-900 dark:text-white">{item.text}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
