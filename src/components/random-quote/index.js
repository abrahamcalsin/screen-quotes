import React, { useState, useEffect, useRef } from "react";
import * as htmlToImage from "html-to-image";
import download from "downloadjs";
import { getRandomQuote } from "../../services/quotes/get-random-quote";
import { useQuery } from "@tanstack/react-query";

export const RandomQuote = () => {
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["random-quote"],
    queryFn: getRandomQuote,
  });

  const updateQuote = () => {
    refetch();
  };

  const boxQuoteRef = useRef(null);

  const exportQuote = () => {
    if (!data) return;

    htmlToImage.toPng(boxQuoteRef.current).then((dataUrl) => {
      download(dataUrl, `screen-quotes-${data.authorSlug}.png`);
    });
  };

  return (
    <>
      <div
        className="relative grid place-content-center h-screen w-full -z-[20]"
        ref={boxQuoteRef}
      >
        {isLoading ? (
          <div className="max-w-2xl flex gap-4 bg-indigo-100 shadow-2xl shadow-indigo-900/20 text-indigo-900/70 text-lg border border-gray-100 px-7 py-7 rounded-lg">
            Loading...
          </div>
        ) : data ? (
          <div className="max-w-2xl flex gap-4 bg-indigo-100 shadow-2xl shadow-indigo-900/20 text-indigo-900/70 text-lg border border-gray-100 px-7 py-7 rounded-lg">
            <div className=" text-indigo-300 w-9 h-9">
              <svg
                className="w-auto h-auto"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 191.029 191.029"
                fill="currentColor"
              >
                <path
                  fill="currentColor"
                  d="M44.33,88.474v15.377h38.417v82.745H0v-82.745h0.002V88.474c0-31.225,8.984-54.411,26.704-68.918
	C38.964,9.521,54.48,4.433,72.824,4.433v44.326C62.866,48.759,44.33,48.759,44.33,88.474z M181.107,48.759V4.433
	c-18.343,0-33.859,5.088-46.117,15.123c-17.72,14.507-26.705,37.694-26.705,68.918v15.377h0v82.745h82.744v-82.745h-38.417V88.474
	C152.613,48.759,171.149,48.759,181.107,48.759z"
                />
              </svg>
            </div>

            <div className="w-full text-xl">
              <p>{data.content}</p>
              <p className="italic mt-2 font-bold">— {data.author}</p>
            </div>
          </div>
        ) : null}
      </div>

      <div className="absolute bottom-20 left-0 right-0 mr-auto ml-auto flex justify-center gap-7 mt-10 text-center">
        <button
          className="bg-blue-700 hover:bg-blue-700/90 text-white py-3 px-5 rounded-md"
          onClick={updateQuote}
        >
          Update Quote!
        </button>

        <button
          className="bg-green-700 hover:bg-green-700/90 text-white py-3 px-5 rounded-md"
          onClick={exportQuote}
        >
          Export PNG Quote
        </button>
      </div>
    </>
  );
};

export default RandomQuote;
