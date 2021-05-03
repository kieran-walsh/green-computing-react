import React from 'react';
import '../css/Content.css';

import Calculator from './Calculator';

export default function Content(props) {
    return (
        <main>
            <h2>eBooks ({props.currentView})</h2>
            <p><b>Keywords</b>: eBooks, paperless, Amazon, PDF</p>
            <p id="breadcrumbs"><b>Paperless</b> &gt; <a>eBooks</a> </p>

            <hr/><Calculator currentView={props.currentView}/><hr/>

            <h3>Advantages of eBooks</h3>
            <p>For consumers, eBooks have several advantages over traditionally printed texts. These include: </p>
            <ol>
                <li>Typically lower prices than printed books.</li>
                <li>Instantly available - most eBooks are available either as a PDF
                    or other digital format. This saves a trip to the bookstore!</li>
                <li>Accessible from a computer or device - no more carrying heavy
                    books around!</li>
                <li>Better note-taking and highlighting functionality using digital tools.</li>
            </ol>
            <h3>How eBooks Help the Environment</h3>
            <p>Just like online news and other paperless delivery methods, eBooks help the environment by eliminating
                the need for paper. By using the Internet as a distribution service, millions of 
                books can be enjoyed by people around the world in a digital format. The average book
                has approximately 200 pages, so just think about how many trees are being saved! For 
                more information on how eBooks help the environment, read <i>GoodEReader</i>'s article 
                <a href="https://goodereader.com/blog/electronic-readers/ebooks-and-the-environment-a-greener-reading-experience" target="_blank" rel="noreferrer" >"eBooks and the Environment: A Greener Reading Experience"</a>.
            </p>
            <h3>How You Can Start Using eBooks</h3>
            <p>At this point, virtually all physical books have been transcribed into an Ebook format,
                and all new releases include both physical and digital versions. The best ways to read
                eBooks are either with eReader applications (like 
                <a href="https://www.adobe.com/solutions/ebook/digital-editions.html" target="_blank" rel="noreferrer" > Adobe Digital Editions</a>) 
                or with digital reading devices like iPads and Amazon Kindle. </p>
            <p>There are also a lot of free PDFs that can be found on the Internet and eBook stores. 
                These are mainly transcriptions of classic works or public, open-domain documents.</p>
            <hr/>
            <h4>Related Pages You May Like</h4>
            <p><i>The articles below might have similar content to this article.</i></p>
            <p> | <a>Paperless Office</a> |
                <a> E-gifts</a> |

            </p>
        </main>
    );
}