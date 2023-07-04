from fastapi import APIRouter, HTTPException, Query

from .storage import get_products_storage
from .schema import ProductCreateSchema, ProductUpdateSchema, Product

router = APIRouter()


PRODUCTS_STORAGE = get_products_storage()


@router.get("/")
async def get_products() -> list[Product]:
    return list(get_products_storage().values())


@router.get("/{product_id}")
async def get_product(product_id: int) -> Product:
    try:
        return PRODUCTS_STORAGE[product_id]
    except KeyError:
        raise HTTPException(
            status_code=404, detail=f"Product with ID={product_id} does not exist."
        )


@router.patch("/{product_id}")
async def update_product(
    product_id: int, updated_product: ProductUpdateSchema
) -> Product:
    try:
        PRODUCTS_STORAGE[product_id] = Product(**(PRODUCTS_STORAGE[product_id].dict() | updated_product.dict(exclude_unset=True)))
        return PRODUCTS_STORAGE[product_id]
    except KeyError:
        raise HTTPException(
            status_code=404, detail=f"Customer with ID={product_id} does not exist."
        )

@router.delete("/{product_id}")
async def delete_product(product_id: int) -> None:
    try:
        del PRODUCTS_STORAGE[product_id]
    except KeyError:
        raise HTTPException(
            status_code=404, detail=f"Product with ID={product_id} does not exist."
        )


@router.post("/")
async def create_product(product: ProductCreateSchema) -> Product:
    index = len(PRODUCTS_STORAGE)
    PRODUCTS_STORAGE[index] = Product(id=index, name=product.name,  price=product.price)

    return PRODUCTS_STORAGE[index]
