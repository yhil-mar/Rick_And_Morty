function LoadingScreen({ isLoading, message }) {

  return (

    <div className={`view fixed z-10 bg-third-color ${isLoading ? 'opacity-100 inline' : 'opacity-0 hidden'}`}>

      <div className="absolute w-fit h-fit inset-0 m-auto animate-loadingScreen">

        <svg className="animate-spin h-16 w-16 mx-auto stroke-blue-login-color/80 stroke-[10] fill-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
          <circle cx='50' cy='50' r='35' stroke-dasharray='164.93361431346415 56.97787143782138'></circle>
        </svg>
      
        <span className="text-span text-white">{message}</span>

      </div>

    </div>

  )

}

export default LoadingScreen