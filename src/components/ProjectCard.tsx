import Image from 'next/image';
import Link from 'next/link';
import { SiGithub } from 'react-icons/si';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface ProjectCardProps {
  name: string;
  description: string;
  techStack: string[];
  githubLink: string;
  imageSrc?: string;
  imageAlt?: string;
  dataAiHint?: string;
}

export function ProjectCard({
  name,
  description,
  techStack,
  githubLink,
  imageSrc,
  imageAlt,
  dataAiHint
}: ProjectCardProps) {
  return (
    <Card className="flex flex-col h-full overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      
      {/* ✅ Enlarged screenshot */}
      {imageSrc && imageAlt && (
        <div className="relative w-full h-[280px] md:h-[320px]">
          <Image 
            src={imageSrc} 
            alt={imageAlt} 
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="rounded-t-lg object-cover"
            data-ai-hint={dataAiHint}
          />
        </div>
      )}

      <CardHeader>
        <CardTitle className="text-xl font-semibold font-headline">{name}</CardTitle>
      </CardHeader>

      <CardContent className="flex-grow">
        <p className="text-sm text-muted-foreground mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {techStack.map((tech) => (
            <Badge key={tech} variant="secondary">{tech}</Badge>
          ))}
        </div>
      </CardContent>

      <CardFooter>
        <Button asChild variant="outline" size="sm">
          <Link href={githubLink} target="_blank" rel="noopener noreferrer">
            <SiGithub className="mr-2 h-4 w-4" />
            GitHub
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
