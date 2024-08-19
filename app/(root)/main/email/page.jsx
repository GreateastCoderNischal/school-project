"use client"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { MySpeaker } from "@/Utilities/speaker";

import { Oswald } from "next/font/google";
import { useEffect, useState } from "react";

const oswald = Oswald({ subsets: ["latin"], weight: ["600"] });

export default function EmailPage() {
    const [numEmails, setNumEmails] = useState(3); // State to track number of email inputs
    const [subject, setSubject] = useState(''); // State to track email subject
    const [emailAddresses, setEmailAddresses] = useState([]); // State to store email addresses
    const [message, setMessage] = useState(''); // State to track email message

    // Function to update number of email inputs
    const handleNumEmailsChange = (e) => {
        const count = parseInt(e.target.value);
        if (!isNaN(count) && count > 0) {
            setNumEmails(count);
        }
    };

    // Function to update 'From' email address
    const handleFromEmailChange = (e) => {
        setFromEmail(e.target.value);
    };

    // Function to update email subject
    const handleSubjectChange = (e) => {
        setSubject(e.target.value);
    };

    // Function to update individual email addresses
    const handleEmailAddressChange = (index, value) => {
        const updatedEmailAddresses = [...emailAddresses];
        updatedEmailAddresses[index] = value;
        setEmailAddresses(updatedEmailAddresses);
    };

    // Function to handle textarea for composing message
    const handleMessageChange = (e) => {
        setMessage(e.target.value);
    };

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault()
        const data = {
            to: emailAddresses,
            subject: subject,
            message: message,
        }
        console.log(data)
        fetch("/main/email/api", {
            method: "POST",
            body: JSON.stringify(data)
        }).then(
            res => {
                console.log(res)
            }).then(() => {
                MySpeaker("Your Email has been Sent");
                alert("done")
            })

    };



    return (
        <div className={`${oswald.className} flex justify-center p-4 h-auto w-full bg-black`}>
            <form onSubmit={handleSubmit}>
                <Card className="w-full max-w-lg bg-white h-auto shadow-lg rounded-lg">
                    <CardHeader className="bg-gray-800 text-white">
                        <CardTitle className="text-center font-semibold text-xl py-4">
                            Send Emails
                        </CardTitle>
                        <CardDescription className="text-center text-gray-300">
                            Specify the number of emails and compose your message
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="p-4">
                        <div className="mb-4">
                            <label htmlFor="numEmails" className="block text-sm font-medium text-gray-700">
                                Number of Emails
                            </label>
                            <input
                                type="number"
                                id="numEmails"
                                name="numEmails"
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                placeholder="Enter number of emails"
                                value={numEmails}
                                onChange={handleNumEmailsChange}
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                                Subject
                            </label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                className="mt-1 block w-full px-3 py-2 border bg-[#008000] border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                placeholder="Enter email subject"
                                value={subject}
                                onChange={handleSubjectChange}
                            />
                        </div>
                        {Array.from({ length: numEmails }).map((_, index) => (
                            <div key={index} className="mb-4">
                                <label htmlFor={`emailAddress${index}`} className="block text-sm font-medium text-gray-700">
                                    Email Address {index + 1}
                                </label>
                                <input
                                    type="email"
                                    id={`emailAddress${index}`}
                                    name={`emailAddress${index}`}
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    placeholder="Enter recipient's email address"
                                    value={emailAddresses[index]}
                                    onChange={(e) => handleEmailAddressChange(index, e.target.value)}
                                    required
                                />
                            </div>
                        ))}
                        <textarea
                            id="message"
                            name="message"
                            rows="4"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm resize-none"
                            placeholder="Compose your message..."
                            value={message}
                            onChange={handleMessageChange}
                        ></textarea>
                    </CardContent>
                    <CardFooter className="bg-gray-100 py-4 px-4">
                        <button
                            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                        >
                            Send Emails
                        </button>
                    </CardFooter>
                </Card>
            </form>
        </div>
    );
}
