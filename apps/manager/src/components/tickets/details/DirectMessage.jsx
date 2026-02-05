import { useState } from 'react';
import './DirectMessage.css';
import { SectionHeader } from '@chopin/ui-web'
import { BiSolidMessageSquareEdit } from "react-icons/bi";
import { FaReply, FaStickyNote } from 'react-icons/fa';

const DirectMessage = ({ data }) => {
    const [activeTab, setActiveTab] = useState('reply');
    const [noteText, setNotetext] = useState(data.note);
    const [inputText, setInputText] = useState('');

    const handleMsgSubmit = () => {
        alert(`Submitted ${activeTab}: ${inputText}`);
        setInputText('');
    };

    const handleNoteSubmit = () => {
        alert(`Submitted ${activeTab}: ${noteText}`);
    };

    return (
        <div>
            <SectionHeader heading="Direct Message" icon={<BiSolidMessageSquareEdit />} />

            <div className='ticket-msg-container'>
                <div className="ticket-msg-buttons-wrapper">
                    <button
                        className={`ticket-msg-btn ${activeTab === 'reply' ? 'active' : ''}`}
                        onClick={() => setActiveTab('reply')}
                    >
                        <FaReply /> Reply
                    </button>
                    <button
                        className={`ticket-msg-btn ${activeTab === 'note' ? 'active' : ''}`}
                        onClick={() => setActiveTab('note')}
                    >
                        <FaStickyNote /> Internal Note
                    </button>
                </div>

                {activeTab === "reply" && (
                    <div className={'ticket-msg-input-area'}>
                        <div className="ticket-msg-input-header">
                            <span>{`Reply to ${data.name} (${data.source})`}</span>
                        </div>

                        <textarea
                            className='ticket-msg-textarea'
                            placeholder="Add observation for you..."
                            value={inputText}
                            onChange={(e) => setInputText(e.target.value)}
                        />
                        <div className="ticket-msg-input-footer">
                            <button onClick={handleMsgSubmit}>Send</button>
                        </div>
                    </div>
                )}

                {activeTab === "note" && (
                    <div className={'ticket-msg-input-area'}>
                        <div className="ticket-msg-input-header">
                            <span>Note (Only you can see this)</span>
                            {data.noteTime ? <span>{data.noteTime}</span> : <></>}
                        </div>

                        <textarea
                            className='ticket-msg-textarea'
                            placeholder="Add observation for you..."
                            value={noteText}
                            onChange={(e) => setNotetext(e.target.value)}
                        />

                        <div className="ticket-msg-input-footer">
                            <button onClick={handleNoteSubmit}>Save</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default DirectMessage
