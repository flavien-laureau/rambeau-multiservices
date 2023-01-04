export default function ServiceTitle({ title, className, children }) {
  return (
    <div className={className}>
      <svg
        width="96"
        height="96"
        viewBox="0 0 96 96"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48 94.3377C73.5916 94.3377 94.3377 73.5916 94.3377 48C94.3377 22.4084 73.5916 1.66234 48 1.66234C22.4084 1.66234 1.66234 22.4084 1.66234 48C1.66234 73.5916 22.4084 94.3377 48 94.3377ZM48 96C74.5097 96 96 74.5097 96 48C96 21.4903 74.5097 0 48 0C21.4903 0 0 21.4903 0 48C0 74.5097 21.4903 96 48 96Z"
          fill="#EA802A"
        />
        <path
          d="M91.4284 47.9999C91.4284 71.9848 71.9848 91.4284 47.9999 91.4284C24.0149 91.4284 4.57129 71.9848 4.57129 47.9999C4.57129 24.0149 24.0149 4.57129 47.9999 4.57129C71.9848 4.57129 91.4284 24.0149 91.4284 47.9999Z"
          fill="#222937"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M68.3086 76.2562C70.0819 78.2851 71.1769 76.8412 72.632 75.1848C74.0872 73.5274 75.3492 72.2741 73.5758 70.25C73.5758 70.25 48.8499 42.1025 42.7438 35.1638L37.4766 41.17L68.3086 76.2562Z"
          fill="#EA802A"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M27.6643 46.0626L29.714 43.7627C29.714 43.7627 28.808 40.9334 30.133 39.5777C31.4588 38.2219 33.6966 39.0587 33.6966 39.0587L40.89 31.1242C40.89 31.1242 40.3846 27.0005 41.0521 26.2393C41.7196 25.4771 49.181 21.3275 49.9023 20.4974L48.369 18.75C48.369 18.75 37.9243 20.1862 36.7924 21.474C36.1283 22.2352 31.1582 27.9637 27.6131 32.0089C27.6131 32.0089 28.5023 34.8986 27.3343 36.2313C26.1622 37.5689 23.5239 36.6143 23.5239 36.6143C22.2795 38.0352 21.4449 38.9831 21.4449 38.9831C20.5666 39.9923 21.0847 41.4093 22.1636 42.6387L24.4551 45.2497C25.5408 46.4829 26.7869 47.065 27.6643 46.0626Z"
          fill="#EA802A"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M60.0027 40.3388C63.5998 42.2824 68.1106 41.683 71.0948 38.2783C73.398 35.6501 74.3116 32.0357 73.8204 28.6395L68.7429 34.4255L64.4227 35.6491L59.5384 30.161L60.6828 25.0701L65.7133 19.4019C62.7308 18.8476 59.362 19.6518 57.0588 22.2839C54.0712 25.6934 53.6657 30.9633 55.3727 35.067L52.0552 38.849C53.5145 40.5044 55.0746 42.2824 56.691 44.1207L60.0027 40.3388Z"
          fill="#EA802A"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M45.646 57.8746L40.6189 52.1499L36.2526 57.1354C35.9789 57.4408 35.7858 57.7865 35.6489 58.1484C35.3919 58.0345 35.2484 58.0306 35.1577 58.0728C34.323 57.7568 33.4414 57.5442 32.5169 57.5442C27.9054 57.5462 24.1697 61.7552 24.1714 66.9484C24.1731 72.1427 27.9105 76.3488 32.5219 76.3469C37.1334 76.345 40.8691 72.136 40.8675 66.9417C40.8675 65.8646 40.6701 64.8439 40.3788 63.8807C40.362 63.7898 40.3586 63.7055 40.3124 63.5724C40.6592 63.4087 40.9867 63.1875 41.2739 62.8562L45.646 57.8746ZM32.5211 72.4213C29.8098 72.4222 27.6149 69.975 27.614 66.9475C27.6132 63.92 29.8031 61.4718 32.5177 61.4698C35.2324 61.4689 37.424 63.9162 37.4248 66.9436C37.4256 69.9702 35.2324 72.4194 32.5211 72.4213Z"
          fill="#EA802A"
        />
      </svg>
      <div>
        <h2 className={`orange`}>{title}</h2>
        <h3>{children}</h3>
      </div>
    </div>
  );
}
