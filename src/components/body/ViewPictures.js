import CardBox from "./CardBox";
const ViewPictures = () => {
    const cards = [{
        name :"Image 1",
        desc : `Some quick example text to build on the card title and make up the bulk of the card's content.`,
        imgUrl : "https://pixabay.com/get/gf42b1f8a98e4e8cb3ce6871425a6336aa5232500974be1c63173f49fda024231a396e3185605e7c0738fb53074db38d26119cc5dc078cb5a3b2409e5b6bb97cd2303c1f95d79c8829bd53d2d2d2f6996_1920.jpg",
        id:1
      },
      {
        name :"Image 2",
        desc : `Some quick example text to build on the card title and make up the bulk of the card's content.`,
        imgUrl : "https://pixabay.com/get/g80d26a1a127803624d15e90f446e7ecfc471efcb978f814402ff0ec54a48a8866680789312e00939572202cfcd9f5986e0e20e0171cad5189d780717badef06f155b9413ef80241eddedb3d44dd54037_1920.jpg",
        id:2
      },
      {
        name :"Image 3",
        desc : `Some quick example text to build on the card title and make up the bulk of the card's content.`,
        imgUrl : "https://pixabay.com/get/gd607e03e4e1d6a91f010425c5dfff2b5379c6f1a2f7e1dd6b736a85aba31d15feb17475a3d5be53c5e8f9f38b0dd2f973a9df64292a65346b268f7a67f07f47af4f9b98548ba14a5a16f2f16dbc5a78c_1920.jpg",
        id:3
      },
      {
        name :"Image 4",
        desc : `Some quick example text to build on the card title and make up the bulk of the card's content.`,
        imgUrl : "https://pixabay.com/get/gec8a6303b2ac9366dafd7ffc0c0ae803ed045c91b0f2abb58ae07292daee27779484c8629854c4d26ec6c724c45aee4e45d1cdaaa8add9914d96b02b700c461c53cd7b516d3a2b109b6bf6956bd59351_1920.jpg",
        id:4
      }
    ];
    return (
        <div style={{
            width : "500px"
        }} className=" flex w-100 justify-content-evenly align-items-center">
            {
                cards.map(data => {
                    return (
                        <CardBox key={data.id} {...data}></CardBox>
                    )
                })
            }
        </div>
    )
}
export default ViewPictures;