import React from 'react'



export default function (props) {
    return (
        <div>用户名:{props.params.username}, 仓库名:{props.params.repoName}</div>
    )
}