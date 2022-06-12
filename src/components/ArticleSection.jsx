import React from "react";

function ArticleSection() {
    const articleData = [
        {
            image: '../../images/image-currency.jpg',
            author: 'Claire Robinson',
            title: 'Receive money in any currency with no fees',
            description: "The world is getting smaller and we're becoming more mobile. So why should you be forced to only receive money in a single"
        },
        {
            image: '../../images/image-restaurant.jpg',
            author: 'Wilson Hutton',
            title: 'Treat yourself without worrying about money',
            description: 'Our simple budgeting feature allows you to separate cut your spending and set realistic limits each month. That means you'
        },
        {
            image: '../../images/image-plane.jpg',
            author: 'Wilson Hutton',
            title: 'Take your Easybank card wherever you go',
            description: "We want you to enjoy your travels. This is why we don't charge any fees on purchases while you're abroad. We'll even show you"
        },
        {
            image: '../../images/image-confetti.jpg',
            author: 'Claire Robinson',
            title: 'Our invite-only Beta accounts are now live!',
            description: "After a lot of hard work by the whole team, we're excited to launch our closed beta. It's easy to request an invite through the site"
        }
    ]
    return(
        <section className="bg-neutrals-200 px-6 py-16 lg:px-28">
            <h2 className="text-3xl text-primary-100 text-center mb-8 lg:text-left lg:text-5xl">Latest Articles</h2>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                {articleData.map((e) => {
                    return (
                        <div className="h-[28rem] rounded overflow-hidden shadow-sm">
                            <img src={e.image} className="h-1/2 w-full object-cover" alt="" />
                            <div className="bg-neutrals-100 p-8 flex flex-col gap-3 h-1/2">
                                <p className="text-neutrals-400 text-xs">By {e.author}</p>
                                <h4 className="text-primary-100 text-base">{e.title}</h4>
                                <p className="text-neutrals-400 text-sm">{e.description} ...</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default ArticleSection