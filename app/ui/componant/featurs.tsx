import Image from "next/image"

const featurs = () => {
    return (
        <div className='flex flex-col md:flex-row items-center gap-5 my-20'>
            <div className="feature-img-container basis-1/2 flex items-center justify-center">
                <Image src={'/img/feature_hero_img.png'} alt="feature_img" width={500} height={300} />
            </div>
            <div className="feature-content-container flex flex-col gap-5 basis-1/2">
                <h1 className='text-4xl font-bold text-gray-800'>We Provide Many Features You Can Use</h1>
                <p className='font-normal text-gray-600 text-base'>You can explore the features that we provide with fun and have their own functions each feature.</p>
                <div className="feature-points-container flex flex-col gap-5">
                    <div className="feature-point flex gap-2 items-center">
                        <div className="feature-tickmark">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                            <path d="M12.1215 2.54932C6.60746 2.54932 2.12146 7.03532 2.12146 12.5493C2.12146 18.0633 6.60746 22.5493 12.1215 22.5493C17.6355 22.5493 22.1215 18.0633 22.1215 12.5493C22.1215 7.03532 17.6355 2.54932 12.1215 2.54932ZM10.1225 16.9623L7.11691 13.9632C6.72616 13.5733 6.72537 12.9405 7.11515 12.5496C7.50517 12.1585 8.13847 12.1578 8.52939 12.548L10.1205 14.1363L14.7075 9.54932C15.0979 9.15885 15.731 9.15885 16.1215 9.54932C16.5119 9.93978 16.5119 10.5729 16.1215 10.9633L10.1225 16.9623Z" fill="#2FAB73" />
                            </svg>
                        </div>
                        <p className='text-sm text-gray-600 font-normal'>Powerfull online protection.</p>
                    </div>
                    <div className="feature-point flex gap-2 items-center">
                        <div className="feature-tickmark">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                            <path d="M12.1215 2.54932C6.60746 2.54932 2.12146 7.03532 2.12146 12.5493C2.12146 18.0633 6.60746 22.5493 12.1215 22.5493C17.6355 22.5493 22.1215 18.0633 22.1215 12.5493C22.1215 7.03532 17.6355 2.54932 12.1215 2.54932ZM10.1225 16.9623L7.11691 13.9632C6.72616 13.5733 6.72537 12.9405 7.11515 12.5496C7.50517 12.1585 8.13847 12.1578 8.52939 12.548L10.1205 14.1363L14.7075 9.54932C15.0979 9.15885 15.731 9.15885 16.1215 9.54932C16.5119 9.93978 16.5119 10.5729 16.1215 10.9633L10.1225 16.9623Z" fill="#2FAB73" />
                            </svg>
                        </div>
                        <p className='text-sm text-gray-600 font-normal'>Internet without borders.</p>
                    </div>
                    <div className="feature-point flex gap-2 items-center">
                        <div className="feature-tickmark">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                            <path d="M12.1215 2.54932C6.60746 2.54932 2.12146 7.03532 2.12146 12.5493C2.12146 18.0633 6.60746 22.5493 12.1215 22.5493C17.6355 22.5493 22.1215 18.0633 22.1215 12.5493C22.1215 7.03532 17.6355 2.54932 12.1215 2.54932ZM10.1225 16.9623L7.11691 13.9632C6.72616 13.5733 6.72537 12.9405 7.11515 12.5496C7.50517 12.1585 8.13847 12.1578 8.52939 12.548L10.1205 14.1363L14.7075 9.54932C15.0979 9.15885 15.731 9.15885 16.1215 9.54932C16.5119 9.93978 16.5119 10.5729 16.1215 10.9633L10.1225 16.9623Z" fill="#2FAB73" />
                            </svg>
                        </div>
                        <p className='text-sm text-gray-600 font-normal'>Supercharged VPN</p>
                    </div>
                    <div className="feature-point flex gap-2 items-center">
                        <div className="feature-tickmark">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                            <path d="M12.1215 2.54932C6.60746 2.54932 2.12146 7.03532 2.12146 12.5493C2.12146 18.0633 6.60746 22.5493 12.1215 22.5493C17.6355 22.5493 22.1215 18.0633 22.1215 12.5493C22.1215 7.03532 17.6355 2.54932 12.1215 2.54932ZM10.1225 16.9623L7.11691 13.9632C6.72616 13.5733 6.72537 12.9405 7.11515 12.5496C7.50517 12.1585 8.13847 12.1578 8.52939 12.548L10.1205 14.1363L14.7075 9.54932C15.0979 9.15885 15.731 9.15885 16.1215 9.54932C16.5119 9.93978 16.5119 10.5729 16.1215 10.9633L10.1225 16.9623Z" fill="#2FAB73" />
                            </svg>
                        </div>
                        <p className='text-sm text-gray-600 font-normal'>No specific time limits.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default featurs