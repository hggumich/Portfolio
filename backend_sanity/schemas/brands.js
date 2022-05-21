export default {
  name: "brands",
  title: "Brands",
  type: "document",
  fields: [
    {
      name: "imgurl",
      title: "ImgURL",
      type: "image",
      option: {
        hotspot: true,
      },
    },
    {
      name: "name",
      title: "Name",
      type: "string",
    },
  ],
};
