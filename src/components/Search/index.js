import { Divider, Input } from 'antd'


function Search({search, setSearch}) {

        function handleChange(e) {
            setSearch(e.target.value)
        }

    return (
      <>
        <Divider>Search</Divider>
        <Input value={search} type="text" onChange={handleChange} placeholder="search your item here" />
      </>
    )
  }
  
  export default Search