import React from 'react'
import {PrettyChatWindow} from 'react-chat-engine-pretty';

const ChatsPage = (props) => {
  return (
    <div style={{height: '100vh'}}>
        <PrettyChatWindow 
            projectId='4bbfb50a-cad5-4de3-8bf8-c1d626a2cb3f'
            username={props.user.username}
            secret={props.user.secret}
            style = {{height : '100%'}}
        />
    </div>
  );
}

export default ChatsPage;