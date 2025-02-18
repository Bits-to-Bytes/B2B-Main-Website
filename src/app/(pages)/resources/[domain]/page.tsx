'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Resource, ResourceMetadata, resources } from '@/data/resources';
import { AnimatePresence, motion } from 'framer-motion';
import { Book, BookOpen, FileText, Newspaper, Play } from 'lucide-react';
import { StaticImageData } from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

interface CardProps {
  url: string;
  type: string;
  title: string;
  description: string;
  difficulty: 'EASY' | 'MEDIUM' | 'HARD';
  image: string | StaticImageData;
}

const ResourceCard = ({
  url,
  type,
  title,
  description,
  difficulty,
  image,
}: CardProps) => {
  const [thumbnailID, setThumbnailID] = useState<string | null>(null);

  useEffect(() => {
    async function fetchYouTubeID() {
      const { id } = await getYouTubeID(url);
      setThumbnailID(id);
    }
    fetchYouTubeID();
  }, [url]);

  const getIcon = () => {
    switch (type) {
      case 'videos':
        return <Play className="w-5 h-5" />;
      case 'blogs':
        return <Newspaper className="w-5 h-5" />;
      case 'courses':
        return <BookOpen className="w-5 h-5" />;
      case 'docs':
        return <Book className="w-5 h-5" />;
      case 'notes':
        return <FileText className="w-5 h-5" />;
      default:
        return null;
    }
  };

  async function getYouTubeID(url: string | URL) {
    const parsedUrl = new URL(url);
    const urlParams = parsedUrl.searchParams;

    if (urlParams.has('v')) {
      return { type: 'video', id: urlParams.get('v') };
    }

    if (parsedUrl.hostname === 'youtu.be') {
      return { type: 'video', id: parsedUrl.pathname.substring(1) };
    }

    return { type: 'unknown', id: null };
  }

  function getDifficultyColor(difficulty: 'EASY' | 'MEDIUM' | 'HARD') {
    switch (difficulty) {
      case 'EASY':
        return 'text-green-700 bg-green-100';
      case 'MEDIUM':
        return 'text-yellow-700 bg-yellow-100';
      case 'HARD':
        return 'text-red-700 bg-red-100';
      default:
        return '';
    }
  }

  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="block"
    >
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="aspect-video bg-gray-100 relative">
          {thumbnailID ? (
            <img
              width={500}
              height={500}
              src={`https://img.youtube.com/vi/${thumbnailID}/maxresdefault.jpg`}
              alt="Resource thumbnail"
              className="w-full h-full object-cover"
            />
          ) : image ? (
            <img
              src={image as string}
              alt="Resource thumbnail"
              width={500}
              height={500}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-300 bg-gray-700">
              Loading...
            </div>
          )}
          <div className="absolute top-3 right-3 bg-white/90 p-2 rounded-full">
            {getIcon()}
          </div>
          <span
            className={`absolute top-2 left-2 text-[12px] ${getDifficultyColor(difficulty)} rounded p-0.5 font-semibold px-2`}
          >
            {difficulty}
          </span>
        </div>
        <div className="p-4">
          <p className="text-sm text-gray-900 line-clamp-2 font-medium">
            {title}
          </p>
          <span className="block mt-2 text-xs text-gray-500 line-clamp-2 truncate">
            {description}
          </span>
        </div>
      </div>
    </motion.a>
  );
};

export default function ResourcePage() {
  const pathname = usePathname();
  const [resource, setResource] = useState<Resource | null>(null);
  const [activeTab, setActiveTab] = useState('videos');

  useEffect(() => {
    const name = pathname.split('/').pop();
    const foundResource = resources.find((r) => r.name === name) || null;
    setResource(foundResource);
  }, [pathname]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  if (!resource) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-screen bg-[#F2F2F2] flex items-center justify-center"
      >
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800">
            Resource Not Found
          </h2>
          <p className="text-gray-600 mt-2">
            The requested resource could not be found.
          </p>
        </div>
      </motion.div>
    );
  }

  const formatTitle = (name: string) =>
    name
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');

  const getResourceCount = (type: keyof Resource) => {
    if (Array.isArray(resource[type])) {
      return resource[type].length;
    }
    return 0;
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-[#F2F2F2] py-16 px-4"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {formatTitle(resource.name)}
          </h1>
          <p className="text-lg text-muted-foreground">
            Curated resources to help you master {formatTitle(resource.name)}
          </p>
        </motion.div>

        <Tabs defaultValue="videos" className="w-full">
          <TabsList className="flex justify-center space-x-2 mb-8 flex-wrap gap-2">
            {['videos', 'blogs', 'courses', 'docs', 'notes'].map((type) => (
              <TabsTrigger
                key={type}
                value={type}
                onClick={() => setActiveTab(type)}
                className={`px-4 py-2 rounded-full`}
              >
                <span
                  className={`flex items-center gap-2 ${activeTab === type && 'text-white'}`}
                >
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                  <span className="bg-muted text-muted-foreground px-2 py-0.5 rounded-full text-xs">
                    {getResourceCount(type as keyof Resource)}
                  </span>
                </span>
              </TabsTrigger>
            ))}
          </TabsList>

          <AnimatePresence mode="wait">
            {['videos', 'blogs', 'courses', 'docs', 'notes'].map((type) => {
              const items = resource[
                type as keyof Resource
              ] as ResourceMetadata[];

              return (
                <TabsContent key={type} value={type}>
                  <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                  >
                    {items.length > 0 ? (
                      items.map((item, index) => {
                        return (
                          <motion.div
                            key={index}
                            variants={itemVariants}
                            className="w-full"
                          >
                            <ResourceCard
                              url={item.url}
                              type={type}
                              title={item.title}
                              description={item.description}
                              difficulty={item.difficulty}
                              image={item.image}
                            />
                          </motion.div>
                        );
                      })
                    ) : (
                      <motion.div
                        variants={itemVariants}
                        className="col-span-full text-center py-12"
                      >
                        <p className="text-muted-foreground">
                          No {type} available yet.
                        </p>
                      </motion.div>
                    )}
                  </motion.div>
                </TabsContent>
              );
            })}
          </AnimatePresence>
        </Tabs>
      </div>
    </motion.div>
  );
}
