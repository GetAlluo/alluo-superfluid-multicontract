import {
  ClosedStreamEndDate as ClosedStreamEndDateEvent,
  SuperfluidEndResolverRoleAdminChanged as SuperfluidEndResolverRoleAdminChangedEvent,
  SuperfluidEndResolverRoleGranted as SuperfluidEndResolverRoleGrantedEvent,
  SuperfluidEndResolverRoleRevoked as SuperfluidEndResolverRoleRevokedEvent,
  SuperfluidEndResolverWrappedTokenToPreventLiquidation as SuperfluidEndResolverWrappedTokenToPreventLiquidationEvent
} from "../generated/SuperfluidEndResolver/SuperfluidEndResolver"
import {
  ClosedStreamEndDate,
  SuperfluidEndResolverRoleAdminChanged,
  SuperfluidEndResolverRoleGranted,
  SuperfluidEndResolverRoleRevoked,
  SuperfluidEndResolverWrappedTokenToPreventLiquidation
} from "../generated/schema"

export function handleClosedStreamEndDate(
  event: ClosedStreamEndDateEvent
): void {
  let entity = new ClosedStreamEndDate(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.sender = event.params.sender
  entity.receiver = event.params.receiver

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSuperfluidEndResolverRoleAdminChanged(
  event: SuperfluidEndResolverRoleAdminChangedEvent
): void {
  let entity = new SuperfluidEndResolverRoleAdminChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.role = event.params.role
  entity.previousAdminRole = event.params.previousAdminRole
  entity.newAdminRole = event.params.newAdminRole

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSuperfluidEndResolverRoleGranted(
  event: SuperfluidEndResolverRoleGrantedEvent
): void {
  let entity = new SuperfluidEndResolverRoleGranted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.role = event.params.role
  entity.account = event.params.account
  entity.sender = event.params.sender

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSuperfluidEndResolverRoleRevoked(
  event: SuperfluidEndResolverRoleRevokedEvent
): void {
  let entity = new SuperfluidEndResolverRoleRevoked(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.role = event.params.role
  entity.account = event.params.account
  entity.sender = event.params.sender

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSuperfluidEndResolverWrappedTokenToPreventLiquidation(
  event: SuperfluidEndResolverWrappedTokenToPreventLiquidationEvent
): void {
  let entity = new SuperfluidEndResolverWrappedTokenToPreventLiquidation(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.sender = event.params.sender
  entity.receiver = event.params.receiver

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
