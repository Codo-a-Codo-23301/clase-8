export default function Video(params) {

    return (


        <video controls width={params.width} height={params.height}>
            <source src={params.url} type={params.type} />
        </video>

    )
}

