import {
  AddedReview as AddedReviewEvent,
  AddedReviewableAddress as AddedReviewableAddressEvent
} from "../generated/TimbreProtocol/TimbreProtocol"
import { AddedReview, AddedReviewableAddress } from "../generated/schema"

export function handleAddedReview(event: AddedReviewEvent): void {
  let entity = new AddedReview(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.existingReviewableAddress = event.params.existingReviewableAddress
  entity._reviewDecentralizedStorageURL =
    event.params._reviewDecentralizedStorageURL
  entity.currentBlockTime = event.params.currentBlockTime
  entity._priceToAccessReview = event.params._priceToAccessReview

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleAddedReviewableAddress(
  event: AddedReviewableAddressEvent
): void {
  let entity = new AddedReviewableAddress(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.newReviewableAddress = event.params.newReviewableAddress

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
