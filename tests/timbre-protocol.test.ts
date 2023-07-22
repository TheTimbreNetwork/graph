import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address, BigInt } from "@graphprotocol/graph-ts"
import { AddedReview } from "../generated/schema"
import { AddedReview as AddedReviewEvent } from "../generated/TimbreProtocol/TimbreProtocol"
import { handleAddedReview } from "../src/timbre-protocol"
import { createAddedReviewEvent } from "./timbre-protocol-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let reviewer = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let existingReviewableAddress = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let _reviewDecentralizedStorageURL = "Example string value"
    let currentBlockTime = BigInt.fromI32(234)
    let _priceToAccessReview = BigInt.fromI32(234)
    let newAddedReviewEvent = createAddedReviewEvent(
      reviewer,
      existingReviewableAddress,
      _reviewDecentralizedStorageURL,
      currentBlockTime,
      _priceToAccessReview
    )
    handleAddedReview(newAddedReviewEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("AddedReview created and stored", () => {
    assert.entityCount("AddedReview", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "AddedReview",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "reviewer",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "AddedReview",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "existingReviewableAddress",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "AddedReview",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "_reviewDecentralizedStorageURL",
      "Example string value"
    )
    assert.fieldEquals(
      "AddedReview",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "currentBlockTime",
      "234"
    )
    assert.fieldEquals(
      "AddedReview",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "_priceToAccessReview",
      "234"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
