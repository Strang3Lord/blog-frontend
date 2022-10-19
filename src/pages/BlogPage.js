import React, { useEffect, useState } from 'react'
import './pages.css'
import { Image } from 'react-bootstrap'
import { CopyBlock, solarizedDark } from 'react-code-blocks'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const BlogPage = ({ match }) => {
  const [date, setDate] = useState()
  const [data, setData] = useState([])
  const [error, setError] = useState()
  const { blogId } = useParams()

  useEffect(() => {
    receive()
  }, [])

  const receive = async () => {
    await axios
      .get(`http://localhost:4000/blogs/${blogId}`)
      .then((res) => {
        console.log(res.data)
        setData(res.data)
      })
      .catch((error) => setError(error))
  }

  return (
    <>
      <div className='title py-5'>{data.heading && data.heading}</div>

      {/* <p className='mx-5 py-2 px-4 fs-2 border'>{data.blogdata.descs}</p> */}
      {/* <Image
        className='width100 my-5 border'
        src='https://www.galvanizeaction.org/wp-content/uploads/2022/06/Wow-gif.gif'
        alt=''
      /> */}

      <div>
        {data?.blogdata?.map((item) => (
          <>
            <div>
              {item.image !== '' ? (
                <Image
                  style={{ width: '100%' }}
                  className='p-5 my-5'
                  src={item.image}
                />
              ) : null}
            </div>

            <div>{item.desc && item.desc}</div>
            <div className='my-5'>
              <CopyBlock
                language={'jsx'}
                showLineNumbers={false}
                theme={solarizedDark}
                text={item.code && item.code}
                wrapLines={true}
                codeBlock
              />
            </div>
          </>
        ))}
      </div>

      <div className='conclusion py-3'>Conclusion</div>
      <div>{data.heading && data.heading}</div>
    </>
  )
}

export default BlogPage
