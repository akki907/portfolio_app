'use client';

import React, { useState } from 'react';
import GitHubCalendar from 'react-github-calendar';
import { Button } from './ui/button';
import { contactData } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';

const currentYear = new Date().getFullYear();

const contributionYears = Array.from({ length: 4 }, (_, i) => currentYear - i);
export default function GithubGraphSection() {
    const { ref } = useSectionInView('Github', 0.5);
    const [year, setYear] = useState(currentYear);

    return (
        <section
            ref={ref}
            id="github"
            className={`py-10 w-full card max-w-7xl`}>
            <div className=''>
                <div className='font-bold capitalize'>
                    <h4>My Github Contributions</h4>
                </div>

                <div className="space-y-6 pb-2 pt-100 md:space-y-4">

                    <div className="mt-3 flex flex-wrap gap-3 text-md leading-7">
                        {contributionYears.map((singleYear) => (
                            <Button
                                key={singleYear}
                                variant={singleYear === year ? 'default' : 'outline'}
                                onClick={() => setYear(singleYear)}
                            >
                                {singleYear}
                            </Button>
                        ))}
                    </div>

                    <div
                        className={`p-6 w-full flex justify-center  items-center overflow-hidden rounded-md border-2 border-opacity-60 border-gray-700 transition-all hover:border-primary-900`}
                    >
                        <GitHubCalendar
                            key={`${year}-calendar`}
                            username={contactData.githubUsername}
                            year={year}
                            colorScheme="dark"
                        />
                    </div>

                </div>

            </div>
        </section>
    )
        ;
}