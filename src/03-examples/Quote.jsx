export const Quote = ({title, fullName, imageUrl}) => {
  return (
    <div className="container clearfix">
        <blockquote 
        className="blockquote text-end"
        style={{display: 'flex'}}>
        <p className="mb-2">{title}</p>  
        <footer className="blockquote-footer">{fullName}</footer>
        </blockquote>
        <img className="img-fluid rounded float-end" src={imageUrl} />
    </div>
  )
}
