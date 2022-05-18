import React from "react";

// markup
const PrisonComponent = () => {
    return (
        <div>
            <div className="border-below pb-0.5 mb-4 mt-10">
                <h2>Short-term financial support</h2>
            </div>
            <div>
                When you leave prison you should get back all the belongings you came in with. if your
                clothes don't fit you anymore or aren't suitable for the weather, you might be able to get
                a <a className="accordion-link animated-underline" href="#">Budgeting Loan</a> to help you buy some. If any of your belongings have gone missing,
                you can make a complaint and might be able to go to court for compensation. You may also get:
                <div className="mx-10 my-3">
                    <ul className="list-disc">
                        <li>
                            <strong>A travel warrant</strong> - This will pay for your travel back home (to anywhere
                            in the British isles or Republic of Ireland).
                        </li>
                        <li>
                           <strong>A discharge grant</strong> - If your are wondering how much money do prisoners
                            get when released, UK legislation does include a discharge grant of £46 to help cover your
                            living expense for your first week out of prison. However, you must apply for a
                            discharge grant at least four weeks before your exit. Also, most prisoners under 18 won't
                            get a discharge grant.
                        </li>
                    </ul>
                </div>
            </div>
            <div className="border-below pb-0.5 mb-4 mt-10">
                <h2>Benefits on release</h2>
            </div>
            <div>
                <p className="my-3">Depending on your age and circumstances you may be able to claim:</p>
                <div className="mx-10 mb-3">
                    <ul className="list-disc">
                        <li>
                            <a className="accordion-link animated-underline" href="#">Universal credit</a>
                        </li>
                        <li>
                            <a className="accordion-link animated-underline" href="#">Jobseeker's allowance</a>
                        </li>
                        <li>Any back payments of benefits which you're owed from before you went to prison</li>
                        <li>
                            <a className="accordion-link animated-underline" href="#">Housing Benefit and Council Tax Reduction</a> to help you pay for housing costs
                        </li>
                        <li>
                            Other benefits, including <a className="accordion-link animated-underline" href="#">Employment and Support Allowance</a> (for
                            people who find it hard to work due to a disability or health condition)
                        </li>
                    </ul>
                </div>
                <div className="mt-4">
                    You'll need a <a className="accordion-link animated-underline" href="#">national insurance (NINO) number</a> to claim benefits.
                    If you don't have one, check out <a className="accordion-link animated-underline" href="#">this website</a> to learn how to register
                    for one. Keep this safe as it will help prove your identity when claiming benefits.
                </div>
            </div>
            <div className="border-below pb-0.5 mb-4 mt-10">
                <h2>Benefits for those on temporary release or home curfew</h2>
            </div>
            <div>
                <div className="my-3"><span className="bolded-text">If you're on temporary release from prison</span>, you can't normally get benefits for the
                    time you're away from prison</div>
                <div><span className="bolded-text">If you've been released from prison early on a tag</span>, you can claim most benefits in
                    the normal way. If your curfew can't claim Jobseeker's allowance or Universal Credit because it limits
                    when you're available for work or the places you can travel to, you can apply to court to get the conditions
                    of your curfew changed</div>
            </div>
            <div className="border-below pb-0.5 mb-4 mt-10">
                <h2>Paying back debt</h2>
            </div>
            <div>
                For many people, debt will get worse while they're in prison. That's why it's importnant to talk to your
                creditors as soon as possible and explain your situation. Ask them to freeze the interest on the debt,
                pay them back in smaller instalments or even cancel it altogether.
            </div>
            <div className="mt-4 mb-10">
                If you've delayed contacting them your debt will grow because of late payment charges and interest.
                They could even take you to court for this, which will make it dificult for you to get credit when you
                leave prison and may even mean you lose your home.
            </div>
        </div>
    );
};

export default PrisonComponent;
