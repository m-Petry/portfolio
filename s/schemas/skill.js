export default {
  name: "skill",
  title: "Skill",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      description: "Title of the skill",
      type: "string"
    },
    {
      name: "progress",
      title: "Progress",
      type: "string",
      description: "Progress of skill from 0 to 100%"
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true
      }
    }
  ]
};
