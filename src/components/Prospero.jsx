import React from "react";
import { useNavigate } from "react-router-dom";

export const Prospero = ({ showLogo }) => {
  const navigate = useNavigate();
  return (
    <figure
      onClick={() => navigate("/")}
      className="cursor-pointer w-28 h-full inline-block absolute left-6"
    >
      <svg
        className={"fill-[--second]"}
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        viewBox="0 0 148.44 30.73"
      >
        <g>
          <g id="Capa_1">
            <g>
              <path d="M32.56,19.11l4.35.03c1.73,0,3.1-.51,4.11-1.52.65-.63,1.21-1.46,1.7-2.49.27-.47.5-.89.69-1.26h-3.5c.03.06.06.11.07.18v.03c0,.26-.26.76-.77,1.49-.29.48-1.13.73-2.51.73h-2.57l1.33-2.43h-3.14l-4.54,8.13h3.15c.16-.18.7-1.14,1.63-2.89" />
              <path d="M34.2,10.53l-1.38,2.48h10.99c.14-.36.23-.65.22-.85-.01-.25-.06-.45-.13-.59-.38-.7-1.05-1-1.87-1h-.64l-7.15-.03h-.03Z" />
              <polygon points="44.6 21.98 49.17 13.87 45.98 13.87 41.44 22 44.58 22 44.6 21.98" />
              <polygon points="50.95 10.63 47.74 10.63 46.45 13 49.65 13 50.95 10.63" />
              <polygon points="63.98 21.98 68.56 13.87 65.36 13.87 60.82 22 63.96 22 63.98 21.98" />
              <polygon points="70.33 10.63 67.12 10.63 65.83 13 69.03 13 70.33 10.63" />
              <polygon points="82.68 21.98 87.26 13.87 84.06 13.87 79.52 22 82.66 22 82.68 21.98" />
              <polygon points="89.03 10.63 85.82 10.63 84.53 13 87.73 13 89.03 10.63" />
              <path d="M55.47,21.98c.51-.05.91-.12,1.2-.21,1.22-.38,2.18-1.06,2.87-2.04l2.71-4.88c.21-.36.39-.68.55-.98h-3.45s.03.07.03.11c0,.29-.49,1.15-1.37,2.85-.89,1.61-1.68,2.28-2.78,2.28h-3.28v-.03l2.88-5.2h-3.21l-4.49,8.13h3.16l5.16-.02Z" />
              <path d="M63.47,12.15c0-.24-.04-.45-.13-.62-.36-.67-1.14-1-2.34-1h-7.45l-.03.03-1.35,2.44h11.09c.14-.36.22-.64.22-.85" />
              <path d="M75.55,21.67c1.09-.35,2.04-1.1,2.87-2.25.91-1.45,1.37-2.38,1.37-2.8v-.24l-.07-.31c-.27-.58-.94-.87-2.01-.87h-4.68c.14-.22.32-.79,1.07-1.33h-3.62c-.68,1.07-1.17,2.13-.92,2.78.21.53,1.02.83,2.61.83h4.18c-.05.26-.31.68-.9,1.11-.51.37-1,.48-1.4.48h-5.6c-.08,0-.45,0-.84,0l-1.65,2.93h8.11c.42-.03.91-.14,1.48-.33" />
              <path d="M83.34,10.56h-7.6c-1.96,0-3.46.73-4.51,2.18-.06.09-.12.17-.18.26h10.95l1.34-2.44Z" />
              <path d="M108.24,12.08c0-.1-.05-.31-.07-.42-.14-.69-.99-1.04-2.51-1.04h-14.07l-1.32,2.37h17.75c.15-.38.24-.69.22-.92" />
              <path d="M107.55,13.87h-3.33s.04.07.04.11v.14c-.15.36-1.73,3.04-4.39,7.88h3.15l4.54-8.13Z" />
              <polygon points="92.96 13.87 89.79 13.87 85.27 22 88.38 22 92.96 13.87" />
              <polygon points="100.36 13.87 97.18 13.87 92.67 22 95.78 22 100.36 13.87" />
              <path d="M117.76,14.02v.1c0,.31-.42,1.29-1.15,2.63-.7,1.47-1.73,2.35-2.87,2.35h-2.1c-.58,0-.87-.2-.87-.59v-.07c0-.33.67-1.44,1.19-2.4.36-.66,1.21-1.77,1.83-2.18h-3.71c-.44.75-1.05,1.82-1.81,3.23-1.05,1.71-1.57,2.86-1.57,3.43,0,.15.03.33.1.55.28.55.81.86,1.6.92h5.08c.93-.04,1.66-.19,2.18-.44.66-.25,1.38-.81,2.14-1.66.31-.42,1.2-2.01,2.67-4.78.28-.47.51-.88.7-1.26h-3.46s.03.09.03.15" />
              <path d="M121.79,11.84c-.25-.85-.95-1.28-2.11-1.28h-4.65c-1.55,0-2.96.74-4.25,2.22-.05.06-.1.14-.16.23h10.95c.15-.39.23-.7.23-.92l-.03-.24Z" />
              <path d="M17.34,21.98c.96-1.8,1.48-2.75,1.57-2.84h4.75l-1.5,2.84h3.08c.09-.1,1.39-2.41,3.88-6.92.26-.44.48-.83.66-1.19h-3.4s.03.09.03.15v.14c0,.16-.4.89-1.2,2.18h-4.75c0-.06,1.07-2.28,1.8-2.47h-3.58l-3.16,5.66c-.41.75-.86,1.57-1.35,2.45v.02h3.15l.02-.02Z" />
              <path d="M30.38,12.19c0-.13-.03-.39-.07-.52-.22-.78-1.11-1.11-2.31-1.11l-4.78.03c-.7.05-1.37.26-2.01.62-.51.21-1.19.8-2.04,1.77,0,0,0,.01-.01.02h11c.13-.34.21-.55.21-.81" />
              <path d="M4.98,19.01h4.92l-1.63,2.99h3.34l1.62-2.91s.02-.05.03-.07c.25-.51.27-.56.25-.78-.04-.47-2.66-.66-3.13-.66l.03-.15s2.65,0,3.17-.14c.52-.13.97-.63,1.39-1.34l1.1-2.02h-3.44s-.16.49-.46.96c-.39.62-1.05,1.06-2.41,1.11-.12,0-.24.01-.36.01h-2.78c0-.07.38-.78,1.13-2.09.06-.1.12-.2.18-.32h-3.26L.01,22h3.26l1.71-2.99Z" />
              <path d="M16.63,13.01l.02-.03c.23-.53.35-.93.35-1.19l-.04-.25c-.08-.32-.24-.59-.47-.8-.44-.41-1.13-.62-2.1-.62h-7.75l-1.61,2.89h11.6Z" />
              <path d="M16.63,13.01s0-.02.01-.03l-.02.03h0Z" />
              <path d="M13.62,8.48h1.63c.15-.24,2.31-4.19,2.31-4.19h-1.73c0,.07-.03.16-.07.28l-2.15,3.9Z" />
              <path d="M22.67,3.84l.68-1.21h-4s-.66,1.21-.66,1.21c.59,0,1.24,0,1.85,0,1.16,0,2.14,0,2.14,0" />
              <path d="M26.85,8.48l.83-1.46h-4.14s.44-.83.44-.83h2.3l.67-1.19h-2.28c.13-.26.29-.54.39-.7h-1.64c-.53.96-1.33,2.43-2.29,4.19h5.73Z" />
              <path d="M29.52,8.46l.85-1.49h2.43l-.82,1.51,1.66-.02.81-1.45s.01-.02.02-.03c.12-.25.13-.27.13-.39-.02-.23-1.32-.33-1.55-.33v-.07s1.33,0,1.58-.07c.26-.07.48-.31.69-.66l.6-1.15h-1.7s-.14.4-.29.63c-.19.3-.52.52-1.19.55-.06,0-.12,0-.18,0h-1.37s.19-.38.56-1.03c.03-.05.06-.1.09-.16h-1.61l-2.32,4.15h1.61Z" />
              <path d="M36.2,3.49l-.02-.13c-.04-.16-.12-.29-.23-.39-.22-.2-.56-.31-1.04-.31h-3.83l-.66,1.18h5.69c.05-.15.08-.26.08-.35" />
              <polygon points="9.2 8.46 11.55 4.29 9.91 4.29 7.57 8.48 9.19 8.48 9.2 8.46" />
              <polygon points="12.47 2.62 10.82 2.62 10.15 3.84 11.8 3.84 12.47 2.62" />
              <path d="M17.7,3.84h0c.1-.24.15-.41.15-.51v-.11c-.05-.14-.12-.25-.21-.34-.18-.17-.48-.26-.88-.26h-3.27l-.68,1.22h4.89Z" />
              <polygon points="19.6 4.29 17.26 8.48 18.88 8.48 18.89 8.46 21.24 4.29 19.6 4.29" />
              <polygon points="11.88 8.48 11.9 8.46 14.25 4.29 12.61 4.29 10.27 8.48 11.88 8.48" />
              <path d="M30.11,2.62h-5.79s-.25.43-.68,1.22h5.79l.68-1.22Z" />
              <path d="M141.53,4.42c1.2,0,2.17-.97,2.17-2.17s-.97-2.17-2.17-2.17-2.17.97-2.17,2.17.97,2.17,2.17,2.17" />
              <path d="M140.74,17.22c-.08-.06-.16-.11-.25-.16h0,0s-.06-.04-.09-.05l-1.24-.7-5.12-2.96h0s-.02,0-.02,0l-8.02,13.9-.37.63c-.05.07-.09.15-.13.23h0s0,0,0,0c-.01.02-.02.05-.03.07h0s0,.01,0,.01c-.1.23-.15.48-.15.75,0,.99.74,1.79,1.66,1.79.54,0,1.03-.28,1.33-.72l.46-.79,2.13-3.69,8.75-2.34c.1-.02.21-.05.31-.08l.09-.03h0c1.21-.45,2.07-1.68,2.07-3.13,0-.64-.17-1.24-.46-1.74-.23-.39-.53-.73-.89-.99M136.05,20.66l-2.79.75,2-3.46,1.02.59,2.44,1.41-2.67.71Z" />
              <path d="M126.18,15.77l.27.76.75-.13.2-.03,3.67-.62-1.57-.92,3.01-5.21,4.25-.9h0c.69-.18,1.2-.85,1.2-1.65,0-.93-.7-1.69-1.57-1.69-.14,0-.27.02-.39.05l-5.64,1.19h-.01s-3.75,6.49-3.75,6.49l-1.73-1.01,1.24,3.47.07.19Z" />
              <polygon points="124.69 12.2 122.33 16.22 125.91 15.61 124.69 12.2" />
              <polygon points="128.7 20.01 131.09 15.95 127.47 16.56 128.7 20.01" />
              <polygon points="127.27 16.59 126.52 16.72 126.32 16.75 126.25 16.56 125.98 15.81 122.33 16.42 128.5 20.04 127.27 16.59" />
              <path d="M146.8,5.01c-.59,0-1.11.33-1.38.81-.05.08-.09.17-.12.26h0s-.16.35-.16.35l-1.16,2.59s0,0,0,0h-3.42s0,0,0,0l-1.71,3.08s0,0,0,0h7.22s0,0,0,0v-.02s0,0,0,0c0,0,0,0,0,0l1.82-4.09.41-.93s0,0,0,0c.04-.15.07-.3.07-.46,0-.88-.71-1.59-1.59-1.59" />
            </g>
          </g>
        </g>
      </svg>
    </figure>
  );
};
