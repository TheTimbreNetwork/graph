import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  AddedReview,
  AddedReviewableAddress
} from "../generated/TimbreProtocol/TimbreProtocol"

export function createAddedReviewEvent(
  existingReviewableAddress: Address,
  _reviewDecentralizedStorageURL: string,
  currentBlockTime: BigInt,
  _priceToAccessReview: BigInt
): AddedReview {
  let addedReviewEvent = changetype<AddedReview>(newMockEvent())

  addedReviewEvent.parameters = new Array()

  addedReviewEvent.parameters.push(
    new ethereum.EventParam(
      "existingReviewableAddress",
      ethereum.Value.fromAddress(existingReviewableAddress)
    )
  )
  addedReviewEvent.parameters.push(
    new ethereum.EventParam(
      "_reviewDecentralizedStorageURL",
      ethereum.Value.fromString(_reviewDecentralizedStorageURL)
    )
  )
  addedReviewEvent.parameters.push(
    new ethereum.EventParam(
      "currentBlockTime",
      ethereum.Value.fromUnsignedBigInt(currentBlockTime)
    )
  )
  addedReviewEvent.parameters.push(
    new ethereum.EventParam(
      "_priceToAccessReview",
      ethereum.Value.fromUnsignedBigInt(_priceToAccessReview)
    )
  )

  return addedReviewEvent
}

export function createAddedReviewableAddressEvent(
  newReviewableAddress: Address
): AddedReviewableAddress {
  let addedReviewableAddressEvent = changetype<AddedReviewableAddress>(
    newMockEvent()
  )

  addedReviewableAddressEvent.parameters = new Array()

  addedReviewableAddressEvent.parameters.push(
    new ethereum.EventParam(
      "newReviewableAddress",
      ethereum.Value.fromAddress(newReviewableAddress)
    )
  )

  return addedReviewableAddressEvent
}
