import BDirection from "components/Button/BDirection";
import { ProductContext } from "components/context/ProductProvider";
import { IconArrowDown } from "components/icon/Icon";
import { useContext, useEffect, useState } from "react";
import classNames from "utils/classNames";

export const Carousel = () => {
  const [slideDirection, setSlideDirection] = useState("");
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [img, setImg] = useState<any>([]);
  const [clickedObjectId, setClickedObjectId] = useState(null);

  const handleId = (objectId: any) => {
    setClickedObjectId(objectId); // Lưu ID của object bên ngoài phần media vào biến state
  };

  const handlePrevClick = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex === 0 ? img.length - 1 : prevIndex - 1
    );
    setSlideDirection("prev");
  };

  const handleNextClick = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex === img.length - 1 ? 0 : prevIndex + 1
    );
    setSlideDirection("next");
  };

  const handleImageClick = (index: number) => {
    setSelectedImageIndex(index);
  };

  const { subProduct } = useContext(ProductContext);
  useEffect(() => {
    if (subProduct.length > 0) {
      const images = subProduct.reduce((result: any[], childItem: any) => {
        const imageObjects = childItem.media.map((mediaItem: any) => ({
          id: mediaItem.id,
          filePath: mediaItem.filePath,
        }));
        return result.concat(imageObjects);
      }, []);
      setImg(images);
    }
  }, [subProduct]);

  return (
    <div className="text-white">
      <div className="flex flex-row items-start gap-10">
        <div className="grid auto-rows-auto grid-cols-2">
          {img.map((image: any, index: number) => (
            <button
              key={index}
              type="button"
              onClick={() => handleImageClick(index)}
              className={classNames(
                "mb-[10px] border p-[5px]",
                selectedImageIndex === index
                  ? "border-gray-200"
                  : "border-transparent"
              )}
            >
              <img
                src={image.filePath}
                alt=""
                style={{ width: "45px", height: "45px", flexShrink: 0 }}
              />
            </button>
          ))}
        </div>
        <div className="image-container">
          <img
            src={img[selectedImageIndex]?.filePath}
            alt=""
            className="image"
          />
          <BDirection className="prev-button" onClick={handlePrevClick}>
            <div className="rotate-90">
              <IconArrowDown width="w-5" height="h-5" strokeW={4} />
            </div>
          </BDirection>
          <BDirection className="next-button" onClick={handleNextClick}>
            <div className="-rotate-90">
              <IconArrowDown width="w-5" height="h-5" strokeW={4} />
            </div>
          </BDirection>
        </div>
      </div>
    </div>
  );
};
