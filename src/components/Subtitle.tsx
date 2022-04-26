type Props = {
  title: string
}

const Title =({title}: Props) => {
  return (
    <h2 className="subtitle"> &#47;&#47;{title} </h2>
  )
}


export default Title