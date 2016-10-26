///via query i can know the previous path
<Link 
    query={{ prevPath: this.props.location.pathname  }} 
    to='albums' 
    className='gallery-back-link'>
    <span className='glyphicon glyphicon-chevron-left'>
    </span> Back to albums
</Link>
