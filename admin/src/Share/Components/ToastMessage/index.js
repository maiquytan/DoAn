const ToastMessage = ({ message, backgroundColor }) => {
  return (
    <>
      {message && (
        <>
          <div className="toast-container">
            <div className="toast">
              <div className="toast-wrap">
                <span>
                  {message}
                </span>
              </div>
            </div>
          </div>
          <style jsx>
            {`
              .toast {
                height: 40px;
                max-width: calc(100vw - 12px);
                padding: 0 24px 3px 24px;
                display: flex;
                justify-content: center;
                align-items: center;
                border-radius: 50px;
                background: ${backgroundColor || '#ff597e'};
                color: white;
                text-align: center;
              }
              .toast-container {
                position: fixed;
                opacity: 1;
                animation-name: toast-showing;
                top: 100px;
                animation-duration: 3s;
                z-index: 1;
                left: 50%;
                transform: translateX(-50%);
              }
              @keyframes toast-showing {
                0% {
                  opacity: 0;
                  top: 150px;
                }
                30% {
                  opacity: 1;
                  top: 100px;
                }
                60%,
                100% {
                  opacity: 1;
                  top: 100px;
                }
              }
            `}
          </style>
        </>
      )}
    </>
  )
}

export default ToastMessage
