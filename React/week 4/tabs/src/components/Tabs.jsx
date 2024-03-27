import React, { useState } from 'react';

const Tabs = props => {
    const { tab_list } = props;
    const [selectedIdx, setSelectedIdx] = useState(0);

    return ( 
        <div style = {
            { display: 'flex', flexWrap: 'wrap' }
        } > {
            tab_list.map((item, i) => {
                const tab_style = {
                    width: '300px',
                    border: '1px solid black',
                    margin: '4px',
                    padding: '4px',
                };

                if (selectedIdx === i) {
                    tab_style.backgroundColor = "black";
                    tab_style.color = "white";
                }

                return ( 
                    <div key = { i }
                    onClick = {
                        e => {
                            setSelectedIdx(i);
                            tab_list[i].callback();
                        }
                    }
                    style = { tab_style } > { item.tab_name } 
                    </div>
                )
            })
        }

        <div style = {
            { width: '940px', border: '1px solid black', margin: '4px', padding: '4px' }
        } > { tab_list[selectedIdx].tab_content } </div> 

        </div>
    )
}

export default Tabs;