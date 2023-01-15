import React, { MouseEvent, useEffect, useRef } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import {
  dataState,
  filter,
  nextImage,
  prevImage,
  setImage,
} from "../features/counter/counterSlice";
import { RootState } from "../app/store";

const GalleryView = () => {
  const dispatch = useAppDispatch();
  const inputRef = useRef<HTMLInputElement>(null);

  const { filteredData, imageIndex } = useAppSelector(
    (state: RootState) => state.gallery
  );

  const handleSearch = (e: MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    const searchValue = inputRef?.current?.value;
    if (searchValue === "") return;
    dispatch(filter(searchValue));
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {filteredData.length > 0 ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {imageIndex > 0 && (
            <p
              style={{ fontSize: "4rem", cursor: "pointer" }}
              onClick={() => dispatch(prevImage())}
            >
              {"<"}
            </p>
          )}
          <img src={filteredData[imageIndex].url} alt="" width={500} />
          {imageIndex < filteredData.length - 1 && (
            <p
              style={{ fontSize: "4rem", cursor: "pointer" }}
              onClick={() => dispatch(nextImage())}
            >
              {">"}
            </p>
          )}
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h2>Search through our database full of colorful squares</h2>
        </div>
      )}

      <div style={{ margin: "2rem 0" }}>
        <form onSubmit={handleSearch}>
          <input type="text" ref={inputRef} autoFocus />
          <button>Search</button>
        </form>
      </div>
      <div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(5, 150px)",
            gap: "2rem",
            width: "100%",
            justifyContent: "center",
            cursor: "pointer",
          }}
        >
          {filteredData &&
            filteredData?.map((item: dataState, index: number) => (
              <div
                key={item.id}
                style={{
                  width: "150px",
                  borderRadius: "10px",
                  overflow: "hidden",
                  boxShadow: "9px 5px 24px -10px rgba(66, 68, 90, 0.25)",
                }}
                onClick={() => dispatch(setImage(index))}
              >
                <img src={item.thumbnailUrl} alt={item.title} />
                <div style={{ padding: "0 0.5rem", fontSize: "0.8rem" }}>
                  <p>{item.title}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default GalleryView;
