// types.ts
export type Project = {
    name: string;
    company: string;
    slug: string;
    stack?: string[];
    image: Media;
    dateAccomplished: string;
    content: any[]; // Adjust based on your richText config
  };
  
  export type Media = {
    url: string;
    alt?: string;
  };
  
  export type ProcessedProject = {
    name: string;
    company: string;
    slug: string;
    stack: string[];
    projectImageUrl: string;
    dateAccomplished: string;
    content: (ProcessedTextContent | ProcessedImageContent)[];
  };
  
  export type ProcessedTextContent = {
    type: 'text';
    style: string;
    textToRender: string;
  };
  
  export type ProcessedImageContent = {
    type: 'image';
    url: string;
  };
  