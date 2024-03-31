import { useSelector } from 'react-redux'
import { NavigateNext } from '@mui/icons-material'
import { Breadcrumbs, Link } from '@mui/material'

import { RootState } from '@/redux/store'
import useGetCategoriesItem from '@/modules/item-detail/hooks/useGetCategoriesItem'

const BreadcrumbsComponent = () => {
  const { categoryId } = useSelector((state: RootState) => state.items)
  const { itemCategories } = useGetCategoriesItem(categoryId)

  console.log({ categoryId, itemCategories })

  const handleClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    event.preventDefault()
    console.info('You clicked a breadcrumb.')
  }

  const renderBreadcrums = itemCategories?.map((item: any) => {
    return (
      <Link
        underline="hover"
        key="1"
        color="inherit"
        href="/"
        onClick={handleClick}
      >
        {item?.name}
      </Link>
    )
  })

  return (
    <Breadcrumbs
      separator={<NavigateNext fontSize="small" />}
      aria-label="breadcrumb"
    >
      {renderBreadcrums}
    </Breadcrumbs>
  )
}

export default BreadcrumbsComponent
