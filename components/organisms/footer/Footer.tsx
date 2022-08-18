import Image from "next/image";

export default function Footer() {
  return (
    <section
      data-aos="fade-right"
      className="flex flex-col w-full text-center mt-11"
    >
      <p className="text-center font-semibold text-3xl">Follow Me</p>
      <div className="inline-flex gap-x-8 mt-8 mx-auto">
        {/* git */}
        <div className="flex p-3 rounded-xl cursor-pointer text-[#172e31] dark:text-white hover:text-white hover:dark:text-[#172e31] bg-[#F5F5F5] dark:bg-[#172e31] hover:bg-[#172e31] hover:dark:bg-[#F5F5F5] transition-all">
          <svg
            width="26"
            height="26"
            viewBox="0 0 200 200"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M186.627 38.7038C195.549 48.6308 200 60.2123 200 73.4483C200 121.42 170.568 135.483 142.91 139.619C146.478 145.41 147.371 152.028 147.371 158.646V192.554C147.371 196.69 144.694 199.172 141.125 199.172C140.184 199.184 139.25 199.022 138.378 198.693C137.506 198.365 136.714 197.878 136.049 197.261C135.384 196.644 134.858 195.91 134.504 195.101C134.15 194.293 133.975 193.427 133.988 192.554V158.646C134.458 155.179 134.058 151.658 132.82 148.358C131.582 145.058 129.539 142.067 126.85 139.619L131.311 128.865C158.969 125.556 187.519 117.283 187.519 72.621C187.519 61.8668 183.058 51.9398 175.029 43.6673L173.244 37.0584C176.637 29.1318 176.949 20.3575 174.127 12.2409C169.675 13.059 160.753 14.7226 145.596 24.6496L140.233 25.4678C119.161 20.5067 97.0868 20.5067 76.0151 25.4678L70.6522 24.6496C54.6124 15.5499 45.6905 13.0681 41.2198 13.0681C38.5432 21.3406 38.5432 30.4313 42.1022 37.8856L40.3276 44.4945C31.4057 52.767 26.9447 63.5213 26.9447 73.4483C26.9447 117.283 53.7104 126.383 83.1428 129.692L86.7116 140.446C81.3585 145.41 78.6819 152.028 79.5741 158.646V193.381C79.5873 194.254 79.4117 195.12 79.0577 195.928C78.7036 196.737 78.1784 197.471 77.513 198.088C76.8475 198.705 76.0555 199.192 75.1835 199.521C74.3116 199.849 73.3775 200.012 72.4366 199.999C71.4956 200.012 70.5616 199.849 69.6896 199.521C68.8177 199.192 68.0256 198.705 67.3602 198.088C66.6948 197.471 66.1695 196.737 65.8155 195.928C65.4615 195.12 65.2859 194.254 65.2991 193.381V174.364C35.8666 180.154 24.2682 166.091 15.3463 155.346C10.8853 150.383 7.31659 146.246 2.85564 145.419C1.97326 144.592 -0.713114 141.283 0.179075 137.974C1.07126 134.665 4.64002 132.183 8.21858 133.838C17.1405 135.492 22.4838 142.11 27.8271 147.901C35.8666 157.828 43.8963 166.918 67.9756 161.964V158.655C67.0932 152.037 68.8678 145.419 72.4366 139.628C45.6709 134.665 14.4541 120.602 14.4541 73.4574C14.4541 60.2214 18.915 48.6399 27.8369 38.7129C25.1604 27.1405 26.0526 14.7317 30.5135 4.80473L34.9744 1.49573C36.7588 0.668478 49.2495 -1.81327 75.1033 13.0681C96.4801 8.1053 118.847 8.1053 140.223 13.0681C165.214 -2.64961 178.597 -0.176953 180.382 0.659388L184.843 3.96839C189.304 15.5499 190.196 27.1314 186.627 38.7038V38.7038Z" />
          </svg>
        </div>
        {/* linkedin */}
        <div className="flex p-3 rounded-xl cursor-pointer text-[#172e31] dark:text-white hover:text-white hover:dark:text-[#172e31] bg-[#F5F5F5] dark:bg-[#172e31] hover:bg-[#172e31] hover:dark:bg-[#F5F5F5] transition-all">
          <svg
            width="26"
            height="26"
            viewBox="0 0 200 200"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M140.087 58.5377C131.084 58.5377 124.417 60.5453 119.199 63.0813C118.362 60.4514 115.613 58.526 112.373 59.1013H72.7462C68.8287 58.526 65.6548 61.332 66.8633 64.9715V194.116C65.6548 197.403 68.8287 200.221 72.7462 199.986H112.373C116.29 200.221 119.464 197.403 119.464 193.94L119.451 115.89C119.438 115.854 119.291 112.121 121.961 109.55C124.099 107.507 127.777 106.462 132.863 106.462C141.336 106.462 145.107 109.526 146.515 116.383V193.94C145.12 197.403 148.294 200.221 152.212 199.986H193.976C197.894 200.221 201.068 197.403 199.66 193.94V113.776C201.055 73.0137 168.214 58.5377 140.087 58.5377V58.5377ZM186.872 188.246H159.303V116.383C159.303 102.517 149.171 93.9234 132.877 93.9234C123.661 93.9234 116.489 96.3184 111.549 101.038C104.684 107.613 105.215 115.948 106.689 117.803V188.246H79.8375V71.0765H105.281V75.0213C105.271 76.1964 105.636 77.3503 106.334 78.3504C107.032 79.3504 108.035 80.1561 109.228 80.6747C110.421 81.1934 111.755 81.4041 113.077 81.2825C114.399 81.1609 115.655 80.7121 116.702 79.9875L118.561 78.7195C123.939 74.9743 129.504 71.0882 140.101 71.0882C151.07 71.0882 186.885 74.176 186.885 113.788V188.246H186.872ZM27.0109 0C12.1111 0 0 10.7073 0 23.88C0 37.0528 12.1111 47.76 27.0109 47.76C41.9107 47.76 54.0218 37.0528 54.0218 23.88C54.0218 10.7073 41.9107 0 27.0109 0ZM27.0109 35.2213C19.9461 35.2213 14.1827 30.1259 14.1827 23.88C14.1827 17.6341 19.9461 12.5388 27.0109 12.5388C34.0757 12.5388 39.8391 17.6341 39.8391 23.88C39.8391 30.1259 34.0757 35.2213 27.0109 35.2213ZM45.9743 58.526H6.56017C2.64266 58.526 -0.531182 61.332 0.451515 64.9715V194.116C-0.531182 197.403 2.64266 200.221 6.56017 199.986H45.9743C49.8918 200.221 53.0657 197.403 53.0657 193.94V64.7954C53.0657 63.1326 52.3185 61.538 50.9887 60.3623C49.6588 59.1865 47.8551 58.526 45.9743 58.526ZM40.2906 188.246H13.6515V71.0765H40.2906V188.246Z" />
          </svg>
        </div>
        {/* twitter */}
        <div className="flex p-3 rounded-xl cursor-pointer text-[#172e31] dark:text-white hover:text-white hover:dark:text-[#172e31] bg-[#F5F5F5] dark:bg-[#172e31] hover:bg-[#172e31] hover:dark:bg-[#F5F5F5] transition-all">
          <svg
            width="26"
            height="26"
            viewBox="0 0 200 200"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M191.315 22.4623C192.614 19.5433 193.685 16.4828 194.514 13.321C194.897 11.8544 194.905 10.2812 194.536 8.80908C194.167 7.337 193.439 6.03528 192.447 5.0758C191.456 4.11632 190.248 3.5442 188.983 3.43498C187.718 3.32575 186.456 3.68456 185.362 4.46403C179.359 8.79169 172.859 12.016 166.076 14.0319C157.842 5.01527 147.149 0.0167107 136.057 0C130.031 0.00561698 124.068 1.48752 118.526 4.35686C112.983 7.22619 107.976 11.4239 103.802 16.6983C99.6294 21.9727 96.3771 28.2152 94.2404 35.0515C92.1038 41.8878 91.1269 49.1773 91.3682 56.4828C65.0167 52.4577 40.9536 36.2788 24.1709 11.3022C23.5279 10.356 22.7061 9.61208 21.7754 9.13363C20.8447 8.65519 19.8326 8.45636 18.8251 8.55405C17.8175 8.65174 16.8442 9.04306 15.988 9.69476C15.1317 10.3465 14.4178 11.2393 13.9067 12.2974C10.0638 20.3004 7.97505 29.3645 7.83967 38.6253C7.70429 47.886 9.52683 57.0344 13.1334 65.1976C12.2489 65.3787 11.3991 65.7545 10.626 66.3065C9.6786 67.0395 8.89862 68.0502 8.358 69.2453C7.81739 70.4404 7.53355 71.7814 7.53267 73.1447C7.53267 89.2806 13.4498 104.094 22.9875 114.16L22.5774 114.657C21.8573 115.646 21.3619 116.845 21.14 118.136C20.9181 119.427 20.9774 120.766 21.3119 122.022C23.3008 129.55 26.6215 136.459 31.0418 142.267C35.4621 148.075 40.8752 152.64 46.902 155.644C34.524 162.97 20.6717 165.828 6.99368 163.875C5.58769 163.702 4.17388 164.099 2.97376 165.004C1.77364 165.91 0.85502 167.273 0.361824 168.88C-0.111802 170.499 -0.12069 172.264 0.336592 173.89C0.793874 175.516 1.6905 176.906 2.88099 177.836C21.4761 192.317 43.1086 200.01 65.204 200C137.615 200 180.898 128.632 180.898 59.6389L180.887 57.3074C187.904 50.6598 194 42.6926 198.943 33.7077C199.691 32.3494 200.059 30.7348 199.992 29.1029C199.925 27.471 199.427 25.9086 198.572 24.647C197.716 23.3854 196.548 22.4918 195.241 22.0983C193.934 21.7048 192.557 21.8324 191.315 22.4623V22.4623ZM170.868 47.4126C170.018 48.1544 169.335 49.1429 168.88 50.2877C168.426 51.4326 168.215 52.6973 168.267 53.9665C168.338 55.843 168.373 57.7481 168.373 59.6247C168.373 121.154 129.788 184.802 65.2158 184.802C53.6991 184.809 42.2637 182.463 31.3886 177.865C44.4132 174.836 56.6486 168.059 67.067 158.103C68.0812 157.133 68.8237 155.807 69.1928 154.305C69.562 152.803 69.5399 151.2 69.1296 149.714C68.7193 148.228 67.9407 146.933 66.9004 146.004C65.8601 145.076 64.6088 144.56 63.3176 144.527C58.2655 144.409 53.3068 142.853 48.8414 139.984C44.376 137.114 40.5289 133.012 37.6104 128.007C40.5748 127.765 43.4806 127.168 46.3044 126.244C47.6711 125.8 48.8734 124.807 49.7153 123.428C50.5572 122.048 50.9889 120.363 50.9399 118.648C50.891 116.932 50.3643 115.287 49.4458 113.982C48.5273 112.676 47.2713 111.787 45.8826 111.459C40.1767 110.05 34.8936 106.786 30.5987 102.016C26.3037 97.2454 23.1585 91.148 21.4994 84.3759C24.6161 85.3284 27.8149 85.8828 31.0137 86.0108C33.7672 85.9966 36.3215 83.9494 37.1768 80.7364C38.0322 77.5235 37.0245 73.9835 34.6928 72.1069C29.1796 67.6501 24.9347 61.237 22.5377 53.7435C20.1407 46.25 19.7085 38.0415 21.3002 30.2388C41.6531 55.5774 69.1357 70.6661 98.2579 72.4908C100.32 72.505 102.124 71.6093 103.378 69.7754C104.632 67.9414 105.112 65.5104 104.667 63.1788C103.065 54.8052 103.781 46.0242 106.706 38.1946C109.632 30.3651 114.602 23.9236 120.849 19.867C127.095 15.8103 134.269 14.3648 141.261 15.754C148.253 17.1432 154.673 21.2897 159.526 27.5519C160.254 28.4936 161.167 29.1952 162.179 29.5907C163.192 29.9861 164.271 30.0624 165.315 29.8123C167.248 29.3432 169.158 28.803 171.044 28.1774C170.194 28.9499 169.31 29.6665 168.396 30.3241C167.181 31.2272 166.256 32.6055 165.773 34.232C165.29 35.8585 165.278 37.6361 165.739 39.2719C166.201 40.9077 167.107 42.304 168.31 43.2307C169.513 44.1575 170.94 44.5594 172.357 44.3702L174.489 44.0432C173.315 45.2169 172.107 46.3407 170.868 47.4126V47.4126Z" />
          </svg>
        </div>
        {/* instagram */}
        <div className="flex p-3 rounded-xl cursor-pointer text-[#172e31] dark:text-white hover:text-white hover:dark:text-[#172e31] bg-[#F5F5F5] dark:bg-[#172e31] hover:bg-[#172e31] hover:dark:bg-[#F5F5F5] transition-all">
          <svg
            width="26"
            height="26"
            viewBox="0 0 200 200"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M58.7727 0.6C69.4364 0.109091 72.8364 0 100 0C127.164 0 130.564 0.118182 141.218 0.6C151.873 1.08182 159.145 2.78182 165.509 5.24545C172.173 7.76364 178.218 11.7 183.218 16.7909C188.309 21.7818 192.236 27.8182 194.745 34.4909C197.218 40.8545 198.909 48.1273 199.4 58.7636C199.891 69.4455 200 72.8455 200 100C200 127.164 199.882 130.564 199.4 141.227C198.918 151.864 197.218 159.136 194.745 165.5C192.236 172.174 188.303 178.22 183.218 183.218C178.218 188.309 172.173 192.236 165.509 194.745C159.145 197.218 151.873 198.909 141.236 199.4C130.564 199.891 127.164 200 100 200C72.8364 200 69.4364 199.882 58.7727 199.4C48.1364 198.918 40.8636 197.218 34.5 194.745C27.8266 192.236 21.7802 188.302 16.7818 183.218C11.6944 178.224 7.75741 172.181 5.24545 165.509C2.78182 159.145 1.09091 151.873 0.6 141.236C0.109091 130.555 0 127.155 0 100C0 72.8364 0.118182 69.4364 0.6 58.7818C1.08182 48.1273 2.78182 40.8545 5.24545 34.4909C7.76112 27.8189 11.7011 21.7756 16.7909 16.7818C21.7822 11.6955 27.8225 7.75858 34.4909 5.24545C40.8545 2.78182 48.1273 1.09091 58.7636 0.6H58.7727ZM140.409 18.6C129.864 18.1182 126.7 18.0182 100 18.0182C73.3 18.0182 70.1364 18.1182 59.5909 18.6C49.8364 19.0455 44.5455 20.6727 41.0182 22.0455C36.3545 23.8636 33.0182 26.0182 29.5182 29.5182C26.2004 32.7459 23.6471 36.6753 22.0455 41.0182C20.6727 44.5455 19.0455 49.8364 18.6 59.5909C18.1182 70.1364 18.0182 73.3 18.0182 100C18.0182 126.7 18.1182 129.864 18.6 140.409C19.0455 150.164 20.6727 155.455 22.0455 158.982C23.6455 163.318 26.2 167.255 29.5182 170.482C32.7455 173.8 36.6818 176.355 41.0182 177.955C44.5455 179.327 49.8364 180.955 59.5909 181.4C70.1364 181.882 73.2909 181.982 100 181.982C126.709 181.982 129.864 181.882 140.409 181.4C150.164 180.955 155.455 179.327 158.982 177.955C163.645 176.136 166.982 173.982 170.482 170.482C173.8 167.255 176.355 163.318 177.955 158.982C179.327 155.455 180.955 150.164 181.4 140.409C181.882 129.864 181.982 126.7 181.982 100C181.982 73.3 181.882 70.1364 181.4 59.5909C180.955 49.8364 179.327 44.5455 177.955 41.0182C176.136 36.3545 173.982 33.0182 170.482 29.5182C167.254 26.2006 163.325 23.6474 158.982 22.0455C155.455 20.6727 150.164 19.0455 140.409 18.6V18.6ZM87.2273 130.827C94.3605 133.797 102.303 134.197 109.699 131.961C117.095 129.725 123.485 124.99 127.778 118.566C132.071 112.142 134.001 104.426 133.237 96.7373C132.473 89.0485 129.064 81.8634 123.591 76.4091C120.102 72.9225 115.884 70.2528 111.239 68.5922C106.595 66.9317 101.64 66.3215 96.7318 66.8056C91.8233 67.2897 87.0832 68.8562 82.8528 71.3921C78.6223 73.928 75.0068 77.3704 72.2664 81.4714C69.526 85.5723 67.729 90.2299 67.0047 95.1087C66.2804 99.9876 66.6468 104.966 68.0776 109.687C69.5084 114.407 71.968 118.751 75.2793 122.407C78.5905 126.062 82.6711 128.938 87.2273 130.827ZM63.6545 63.6545C68.4275 58.8816 74.0938 55.0955 80.33 52.5124C86.5661 49.9293 93.25 48.5998 100 48.5998C106.75 48.5998 113.434 49.9293 119.67 52.5124C125.906 55.0955 131.573 58.8816 136.345 63.6545C141.118 68.4275 144.905 74.0938 147.488 80.33C150.071 86.5661 151.4 93.25 151.4 100C151.4 106.75 150.071 113.434 147.488 119.67C144.905 125.906 141.118 131.573 136.345 136.345C126.706 145.985 113.632 151.4 100 151.4C86.3678 151.4 73.294 145.985 63.6545 136.345C54.0151 126.706 48.5998 113.632 48.5998 100C48.5998 86.3678 54.0151 73.294 63.6545 63.6545V63.6545ZM162.8 56.2545C163.983 55.1388 164.93 53.7971 165.585 52.3089C166.24 50.8206 166.589 49.2161 166.613 47.5903C166.637 45.9645 166.334 44.3504 165.723 42.8437C165.111 41.337 164.204 39.9683 163.054 38.8185C161.904 37.6688 160.536 36.7614 159.029 36.1502C157.522 35.5389 155.908 35.2361 154.282 35.2598C152.657 35.2835 151.052 35.6332 149.564 36.2881C148.076 36.9431 146.734 37.89 145.618 39.0727C143.448 41.373 142.26 44.4284 142.306 47.5903C142.352 50.7522 143.629 53.7716 145.865 56.0077C148.101 58.2437 151.121 59.5203 154.282 59.5664C157.444 59.6124 160.5 58.4245 162.8 56.2545V56.2545Z"
            />
          </svg>
        </div>
      </div>
      <p className="mt-8">
        © 2022.{" "}
        <span className="font-semibold">Next.js & Tailwind CSS Portfolio</span>.
        Developed by <span className="font-semibold">CHA</span>
      </p>
    </section>
  );
}