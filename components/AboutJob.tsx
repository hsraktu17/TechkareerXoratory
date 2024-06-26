export default function AboutJob(){

    const responsibilities = [
        'Handle the UI/UX research design',
        'Work on researching on latest web applications designs & trends',
        'Work on conceptualizing and visualizing',
        'Work on creating graphics content and other graphic related works',
    ];

    const benefits = [
        'Health insurance',
        'Provident Fund',
    ];
    
    const schedule = 'Day shift';

    const payTypes = [
        'Performance bonus',
        'Yearly bonus',
    ];
    
    const workLocation = 'In person';

    return( 
        <div>
            <div className="px-10 mt-8">
                <div className="text-[14px] text-[#6E6D6D]">
                    About this job
                </div>
                <div className="text-[#3D3D3D]">
                    <div className="mt-3 text-[16px] font-[500px]">
                        <ol className='list-decimal pl-5 mb-4'>
                            {responsibilities.map((responsibility, index) => (
                            <li key={index} className='mb-2'>{responsibility}</li>
                            ))}
                        </ol>
                        <div>
                            Benefits:
                        </div>
                        <ul className='list-disc pl-5 mb-4'>
                            {benefits.map((benefit, index) => (
                            <li key={index} className='mb-2'>{benefit}</li>
                            ))}
                        </ul>
                        <div>
                            Schedule:
                        </div>
                        <p className='mb-4'>{schedule}</p>
                        <div>
                            Supplemental Pay Types:
                        </div>
                        <ul className='list-disc pl-5 mb-4'>
                            {payTypes.map((payType, index) => (
                            <li key={index} className='mb-2'>{payType}</li>
                            ))}
                        </ul>
                        <div>
                            Work Location: {workLocation}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}