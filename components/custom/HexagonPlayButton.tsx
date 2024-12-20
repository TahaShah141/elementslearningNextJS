type HexagonPlayButtonProps = {
  outerColor?: string
  innerColor?: string
}

export const HexagonPlayButton = ({outerColor="#000000", innerColor="#FFFFFF"}) => {
  
  return (
    <div className="relative size-full">
      <svg style={{color: outerColor}} className="size-full rotate-12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>hexagon</title><path d="M21,16.5C21,16.88 20.79,17.21 20.47,17.38L12.57,21.82C12.41,21.94 12.21,22 12,22C11.79,22 11.59,21.94 11.43,21.82L3.53,17.38C3.21,17.21 3,16.88 3,16.5V7.5C3,7.12 3.21,6.79 3.53,6.62L11.43,2.18C11.59,2.06 11.79,2 12,2C12.21,2 12.41,2.06 12.57,2.18L20.47,6.62C20.79,6.79 21,7.12 21,7.5V16.5Z" fill="currentColor"/></svg>
      <svg style={{color: innerColor}} className="size-3/5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>play</title><path d="M8,5.14V19.14L19,12.14L8,5.14Z" fill="currentColor"/></svg>
    </div>
  )
}
