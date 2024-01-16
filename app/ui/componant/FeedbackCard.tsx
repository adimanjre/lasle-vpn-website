import Image from 'next/image'

const FeedbackCard = ({imgUrl,name,address,rating,feedback,classes}:{imgUrl:string, name:string,address:string,rating:string,feedback:string,classes:string}) => {
  return (
    <div className={`bg-white border-gray-300 rounded-lg w-80 md:w-96 p-8 ${classes}`}>
        <div className="flex flex-nowrap profileDetails-container justify-between gap-5">
                  <div className='flex flex-nowrap items-center gap-3 whitespace-nowrap'>
                      <div className="img-container rounded-full">
                          <Image className='feedback-img' alt='feedback-profile-image' src={imgUrl} height={50} width={50} />
                      </div>
                      <div className='text-left'>
                          <h4 className='text-lg font-semibold text-gray-800'>{name}</h4>
                          <p className='text-sm font-normal text-gray-600'>{address}</p>
                      </div>
                  </div>
                  <div className='flex flex-nowrap items-center gap-2'>
                      <p className='font-normal text-base text-gray-800'>{rating}</p>
                      <div><svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                          <path d="M14.1891 6.41802L10.2219 5.84146L8.44844 2.24615C8.4 2.14771 8.32031 2.06802 8.22187 2.01959C7.975 1.89771 7.675 1.99927 7.55156 2.24615L5.77812 5.84146L1.81094 6.41802C1.70156 6.43365 1.60156 6.48521 1.525 6.56334C1.43244 6.65847 1.38143 6.78646 1.38319 6.91918C1.38495 7.0519 1.43933 7.1785 1.53437 7.27115L4.40469 10.0696L3.72656 14.0211C3.71066 14.1131 3.72083 14.2076 3.75592 14.294C3.79102 14.3805 3.84963 14.4554 3.92511 14.5102C4.00059 14.565 4.08992 14.5976 4.18297 14.6042C4.27602 14.6108 4.36907 14.5913 4.45156 14.5477L8 12.6821L11.5484 14.5477C11.6453 14.5993 11.7578 14.6165 11.8656 14.5977C12.1375 14.5508 12.3203 14.293 12.2734 14.0211L11.5953 10.0696L14.4656 7.27115C14.5437 7.19459 14.5953 7.09459 14.6109 6.98521C14.6531 6.71177 14.4625 6.45865 14.1891 6.41802Z" fill="#FEA250" />
                      </svg></div>
                  </div>
              </div>
              <p className='text-base text-gray-600 font-normal mt-5 text-left'> 
                {feedback}
              </p>
    </div>
  )
}

export default FeedbackCard