import React from "react";

function WhySection() {
    const data = [
        {
            image: "../../images/icon-online.svg",
            title: "Online Banking",
            text: "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world."
        },
        {
            image: "../../images/icon-budgeting.svg",
            title: "Simple Budgeting",
            text: "See exactly where your money goes each month. Receive notifications when you're close to hitting your limits."
        },
        {
            image: "../../images/icon-onboarding.svg",
            title: "Fast Onboarding",
            text: "We don't do branches. Open your account in minutes online and start taking control of your finances right away."
        },
        {
            image: "../../images/icon-api.svg",
            title: "Open API",
            text: "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier."
        }
    ]

    return (
        <section className="bg-neutrals-300 px-6 py-16 lg:px-28 lg:py-24">
            <h2 className="text-3xl text-primary-100 text-center mb-4 mx-auto max-w-xs lg:text-left lg:text-5xl lg:mx-0 lg:max-w-none">Why choose Easybank?</h2>
            <p className="text-sm text-neutrals-400 text-center max-w-lg mx-auto mb-8 lg:text-left lg:text-lg lg:mx-0 lg:mb-16">We leverage Open Banking to turn your bank account into your financial hub.
                Control your finances like never before.
            </p>
            <div className="flex flex-col gap-8 lg:flex-row lg:justify-between">
                {data.map((e) => {
                    return (
                        <div className="flex flex-col items-center gap-4 text-center lg:text-left lg:items-start lg:gap-8 lg:max-w-[16.5rem]">
                           <img src={e.image} alt="" /> 
                           <h3 className="text-primary-100 lg:text-2xl">{e.title}</h3>
                           <p className="text-sm text-neutrals-400 max-w-lg lg:text-base">{e.text}</p>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default WhySection