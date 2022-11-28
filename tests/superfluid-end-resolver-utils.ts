import { newMockEvent } from "matchstick-as"
import { ethereum, Address, Bytes } from "@graphprotocol/graph-ts"
import {
  ClosedStreamEndDate,
  SuperfluidEndResolverRoleAdminChanged,
  SuperfluidEndResolverRoleGranted,
  SuperfluidEndResolverRoleRevoked,
  SuperfluidEndResolverWrappedTokenToPreventLiquidation
} from "../generated/SuperfluidEndResolver/SuperfluidEndResolver"

export function createClosedStreamEndDateEvent(
  sender: Address,
  receiver: Address
): ClosedStreamEndDate {
  let closedStreamEndDateEvent = changetype<ClosedStreamEndDate>(newMockEvent())

  closedStreamEndDateEvent.parameters = new Array()

  closedStreamEndDateEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )
  closedStreamEndDateEvent.parameters.push(
    new ethereum.EventParam("receiver", ethereum.Value.fromAddress(receiver))
  )

  return closedStreamEndDateEvent
}

export function createSuperfluidEndResolverRoleAdminChangedEvent(
  role: Bytes,
  previousAdminRole: Bytes,
  newAdminRole: Bytes
): SuperfluidEndResolverRoleAdminChanged {
  let superfluidEndResolverRoleAdminChangedEvent = changetype<
    SuperfluidEndResolverRoleAdminChanged
  >(newMockEvent())

  superfluidEndResolverRoleAdminChangedEvent.parameters = new Array()

  superfluidEndResolverRoleAdminChangedEvent.parameters.push(
    new ethereum.EventParam("role", ethereum.Value.fromFixedBytes(role))
  )
  superfluidEndResolverRoleAdminChangedEvent.parameters.push(
    new ethereum.EventParam(
      "previousAdminRole",
      ethereum.Value.fromFixedBytes(previousAdminRole)
    )
  )
  superfluidEndResolverRoleAdminChangedEvent.parameters.push(
    new ethereum.EventParam(
      "newAdminRole",
      ethereum.Value.fromFixedBytes(newAdminRole)
    )
  )

  return superfluidEndResolverRoleAdminChangedEvent
}

export function createSuperfluidEndResolverRoleGrantedEvent(
  role: Bytes,
  account: Address,
  sender: Address
): SuperfluidEndResolverRoleGranted {
  let superfluidEndResolverRoleGrantedEvent = changetype<
    SuperfluidEndResolverRoleGranted
  >(newMockEvent())

  superfluidEndResolverRoleGrantedEvent.parameters = new Array()

  superfluidEndResolverRoleGrantedEvent.parameters.push(
    new ethereum.EventParam("role", ethereum.Value.fromFixedBytes(role))
  )
  superfluidEndResolverRoleGrantedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  superfluidEndResolverRoleGrantedEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )

  return superfluidEndResolverRoleGrantedEvent
}

export function createSuperfluidEndResolverRoleRevokedEvent(
  role: Bytes,
  account: Address,
  sender: Address
): SuperfluidEndResolverRoleRevoked {
  let superfluidEndResolverRoleRevokedEvent = changetype<
    SuperfluidEndResolverRoleRevoked
  >(newMockEvent())

  superfluidEndResolverRoleRevokedEvent.parameters = new Array()

  superfluidEndResolverRoleRevokedEvent.parameters.push(
    new ethereum.EventParam("role", ethereum.Value.fromFixedBytes(role))
  )
  superfluidEndResolverRoleRevokedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  superfluidEndResolverRoleRevokedEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )

  return superfluidEndResolverRoleRevokedEvent
}

export function createSuperfluidEndResolverWrappedTokenToPreventLiquidationEvent(
  sender: Address,
  receiver: Address
): SuperfluidEndResolverWrappedTokenToPreventLiquidation {
  let superfluidEndResolverWrappedTokenToPreventLiquidationEvent = changetype<
    SuperfluidEndResolverWrappedTokenToPreventLiquidation
  >(newMockEvent())

  superfluidEndResolverWrappedTokenToPreventLiquidationEvent.parameters = new Array()

  superfluidEndResolverWrappedTokenToPreventLiquidationEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )
  superfluidEndResolverWrappedTokenToPreventLiquidationEvent.parameters.push(
    new ethereum.EventParam("receiver", ethereum.Value.fromAddress(receiver))
  )

  return superfluidEndResolverWrappedTokenToPreventLiquidationEvent
}
