type Props = {
  title: string
}

const Title =({title}: Props) => {
  return (
    <h1 className="main-title"> &#60; {title} &#47;&#62;</h1>
  )
}


export default Title

