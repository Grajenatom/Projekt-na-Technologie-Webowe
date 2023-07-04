from fastapi import APIRouter, HTTPException, Query

from .storage import get_orders_storage
from .schema import OrderCreateSchema, OrderUpdateSchema, Order

router = APIRouter()


ORDERS_STORAGE = get_orders_storage()


@router.get("/")
async def get_orders() -> list[Order]:
    return list(get_orders_storage().values())


@router.get("/{order_id}")
async def get_order(order_id: int) -> Order:
    try:
        return ORDERS_STORAGE[order_id]
    except KeyError:
        raise HTTPException(
            status_code=404, detail=f"Order with ID={order_id} does not exist."
        )


@router.patch("/{order_id}")
async def update_order(
    order_id: int, updated_order: OrderUpdateSchema
) -> Order:
    try:
        ORDERS_STORAGE[order_id] = Order(**(ORDERS_STORAGE[order_id].dict() | updated_order.dict(exclude_unset=True)))
        return ORDERS_STORAGE[order_id]
    except KeyError:
        raise HTTPException(
            status_code=404, detail=f"Order with ID={order_id} does not exist."
        )

@router.delete("/{order_id}")
async def delete_order(order_id: int) -> None:
    try:
        del ORDERS_STORAGE[order_id]
    except KeyError:
        raise HTTPException(
            status_code=404, detail=f"Order with ID={order_id} does not exist."
        )


@router.post("/")
async def create_order(order: OrderCreateSchema) -> Order:
    index = len(ORDERS_STORAGE)
    ORDERS_STORAGE[index] = Order(id=index, client_id=order.client_id,  product_id=order.product_id)

    return ORDERS_STORAGE[index]
